import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import styled from 'styled-components/macro'

import BrowseListing from './BrowseListing'

const BrowseRouter = () => {
    let { path } = useRouteMatch()
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path={`${path}`} component={BrowseListing}></Route>
                </Switch>
            </Router>
            <BuildWrap></BuildWrap>
        </React.Fragment>
    )
}

export default BrowseRouter

const BuildWrap = styled.div`
    margin: 48px 0;
`
