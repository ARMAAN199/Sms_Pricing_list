import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector } from 'react-redux'
import './index.css'
import reportWebVitals from './reportWebVitals'
import '@gojek/typeface-maison-neue'
import configureStore from './store/configureStore'
import AppRoute from './AppRoute'
import { SnackbarProvider } from 'notistack'

// const {
//     colorTheme
// } = useSelector((state: any) => ({
//     colorTheme: state.automation.colorTheme,
// }))

const store = configureStore()

ReactDOM.render(
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <React.StrictMode>
                <AppRoute />
            </React.StrictMode>
        </Provider>
    </SnackbarProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
