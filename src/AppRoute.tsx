import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

const App = React.lazy(() => import('./App'))
const Login = React.lazy(() => import('./screens/Login/Login'))

const appRoute = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    {/* <Route path="/logout" component={Logout} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/app" component={App} />
                    <Route path="/" render={() => <Redirect to="/login" />} />
                    <Route path="*" render={() => <h2>404 not found</h2>} />
                </Switch>
            </Router>
        </React.Suspense>
    )
}

export default appRoute
