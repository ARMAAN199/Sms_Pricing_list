import { URL } from '../../constants/url.constants'

import { getCookieByName, deleteCookiebyName } from '../utils/utils.service'

function parseJSON(response: any) {
    try {
        if (response.status === 204 || response.status === 205) {
            return {}
        }
        const contentType = response.headers.get('Content-Type')
        if (contentType.indexOf('application/json; charset=utf-8') === -1) {
            return response.text()
        } else {
            return response.json()
        }
    } catch (err) {
        throw err
    }
}

function checkStatus(response: any) {
    try {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else if (response.status === 401) {
            deleteCookiebyName('johnwick')
            document.location.href = '/login?error=session'
        } else if (response.status === 409) {
            return response.json().then((json: object) => {
                return Promise.reject({ status: 409, error: json })
            })
        } else {
            return response.json().then((json: object) => {
                return Promise.reject({ ...json, status: response.status })
            })
        }
    } catch (err) {
        throw err
    }
}

function constructUri(segment: any, params: any = []) {
    let p = params ? `?${params.join('&')}` : ``
    let completeUrl = p !== '?' ? `${segment}${p}` : `${segment}`
    return completeUrl
}

interface options {
    method?: any
    headers?: any
    body?: any
    credentials?: any
}

function prepareRequest(
    url: string,
    method: string,
    params: object,
    data = {},
    headers: any = {}
) {
    let options: options = {
        // credentials: "include"
    }
    if (!(data instanceof FormData)) {
        headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
    const authToken = getCookieByName('johnwick')
    if (true || (authToken && authToken !== '')) {
        headers['Authorization'] = authToken
    }

    options = {
        method: method,
        headers: new Headers(headers),
        credentials: 'same-origin',
    }

    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        if (data instanceof FormData) {
            options.body = data
            delete options.headers['Content-Type']
        } else {
            options.body = JSON.stringify(data)
        }
    }

    let completeUrl = URL.BACKEND_URL + constructUri(url, params)
    return fetch(completeUrl, options).then(checkStatus).then(parseJSON)
}

export class ApiService {}

export function makeGet(url: string, params?: any, headers = {}) {
    return prepareRequest(url, 'GET', params, {}, headers)
}
export function makePost(url: string, data: any, headers = {}, params = []) {
    return prepareRequest(url, 'POST', params, data, headers)
}
export function makePut(url: string, data: any, headers = {}, params = []) {
    return prepareRequest(url, 'PUT', params, data, headers)
}
export function makeDelete(url: string, data: any, headers = {}, params = []) {
    return prepareRequest(url, 'DELETE', params, data, headers)
}
