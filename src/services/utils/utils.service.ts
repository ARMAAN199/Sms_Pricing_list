import jwt_decode from 'jwt-decode'

export function getCookieByName(name: string) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) {
        return match[2]
    } else return null
}

export function deleteCookiebyName(name: string) {
    // document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    document.cookie = name + '=;max-age=0;path=/;domain='
}

export function parseURLQueryString() {
    let params = new URLSearchParams(document.location.search.substring(1))
    return params
}

export function getTokenInfo(field: string) {
    const savedToken = getCookieByName('johnwick')
    const token: any = savedToken ? jwt_decode(savedToken) : null
    if (token && token.user) {
        return token.user[field] ? token.user[field] : ''
    }
    return null
}

export function getEntireToken() {
    const savedToken = getCookieByName('johnwick')
    const token: any = savedToken ? jwt_decode(savedToken) : null
    if (token && token.user) {
        return token.user
    }
    return null
}
