import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import { useSnackbar } from 'notistack'
import { SnackbarService } from './services/snackbar/snackbar.service'
import { getCookieByName } from './services/utils/utils.service'

function App() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    new SnackbarService(enqueueSnackbar, closeSnackbar)
    if (false) {
        document.location.href = '/login?error=session'
        return null
    } else {
        return (
            <div className="App">
                <Home />
            </div>
        )
    }
}

export default App
