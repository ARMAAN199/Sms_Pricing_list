import { Clickstream } from '@gojek/clickstream-web/dist/index'
import { products } from '@gojek/web-gojek-protos'

const { Component } = products.events.ui

const clckstrm = new Clickstream({
    event: {
        group: 'web-gojek',
    },
    network: {
        url: new URL(
            'https://raccoon-integration.gojekapi.com/api/v1/events'
        ).toString(),
        headers: new Headers({
            Authorization:
                'Basic Z29qZWtfY29uc3VtZXJfYXBwX2ludGVncmF0aW9uX2NsaWVudDo0MDE5MDViNi04MjdlLTRjN2UtYWIyMi0xMTE4NzJmZDdjMGU=',
        }),
    },
})

const getTimestamp = () => {
    const date = new Date()
    return Math.floor(date.getTime() / 1000)
}

const useClickStream_AJ = (category = 'testajIntegration') => {
    const trackEvent = (eventName, eventDetails) => {
        const payload = Component.create({
            eventName: eventName,
            ...eventDetails,
            eventTimestamp: { seconds: getTimestamp() },
        })
        clckstrm.track(payload).then((res) => {
            console.log(res, JSON.stringify(payload))
        })
    }

    return trackEvent
}

export default useClickStream_AJ

//Clickstream-web-gojek-page-log
