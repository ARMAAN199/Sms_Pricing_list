import React from 'react'
import ReactGA from 'react-ga'

// Uses react GA 4

const useReactGA_AJ = (category = 'Category') => {
    const trackEvent = (action = {}, label = 'label', value = 'value') => {
        ReactGA.event({
            category,
            action,
            label,
            value,
        })
    }

    return trackEvent
}

export default useReactGA_AJ
