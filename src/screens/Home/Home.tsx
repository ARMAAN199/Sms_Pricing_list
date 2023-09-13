import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Logo from '../../assets/images/Logo.svg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
} from 'react-router-dom'
import BrowseListing from '../Browse/BrowseListing'
import Landing from './Landing'
import {
    deleteCookiebyName,
    getTokenInfo,
} from '../../services/utils/utils.service'
import { Avatar, ClickAwayListener } from '@mui/material'
import { usePath } from '../../shared/hooks/usePath'

import ReactGA from 'react-ga'
import { withRouter } from 'react-router-dom'
import { URL } from '../../constants/url.constants'
import BrowseRouter from '../Browse/BrowseRouter'

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    })

    const name = getTokenInfo('given_name')
        ? getTokenInfo('given_name')
        : getTokenInfo('name')
    const picture = getTokenInfo('picture')

    const [showUserInfo, setShowUserInfo] = useState<boolean>(false)
    const [location, setLocation] = useState<any>(useLocation().pathname)

    const handleLogout = () => {
        deleteCookiebyName('johnwick')
        document.location.href = '/login'
    }

    const handleNavChange = () => {
        setLocation(window.location.pathname)
    }

    // useEffect(() => {
    //     console.log(location)
    // }, [location])

    return (
        <React.Fragment>
            <Router>
                <HomeWrapper>
                    <Navigation>
                        <LeftSide>
                            <LogoImg src={Logo}></LogoImg>
                        </LeftSide>
                        <RightSide>
                            <Avatar
                                onClick={() => setShowUserInfo(!showUserInfo)}
                                sx={{
                                    cursor: 'pointer',
                                    bgcolor: 'black',
                                    width: 36,
                                    height: 36,
                                }}
                                alt={name}
                                src={picture}
                            />
                            {showUserInfo ? (
                                <ClickAwayListener
                                    onClickAway={() =>
                                        setShowUserInfo(!showUserInfo)
                                    }
                                >
                                    <UserInfoWrap>
                                        <UserMetaData>
                                            <Avatar
                                                onClick={() =>
                                                    setShowUserInfo(
                                                        !showUserInfo
                                                    )
                                                }
                                                sx={{
                                                    bgcolor: 'black',
                                                    width: 36,
                                                    height: 36,
                                                }}
                                                alt={name}
                                                src={picture}
                                            />
                                            <UserName>
                                                {getTokenInfo('name')}
                                            </UserName>
                                        </UserMetaData>
                                        <Logout onClick={handleLogout}>
                                            Logout
                                        </Logout>
                                    </UserInfoWrap>
                                </ClickAwayListener>
                            ) : null}
                        </RightSide>
                    </Navigation>
                    <BodyWrapper>
                        <MenuBar onClick={() => handleNavChange()}>
                            <br />
                            {/* <LinkItem
                                to={'/app'}
                                $active={location === '/app/home'}
                            >
                                Home
                            </LinkItem> */}
                            <LinkItem to={'/app'} $active={location === '/app'}>
                                Prices
                            </LinkItem>
                        </MenuBar>
                        <RightSideBody>
                            <Switch>
                                <Route
                                    exact
                                    path={'/app/home'}
                                    component={Landing}
                                ></Route>
                                <Route
                                    path={'/app'}
                                    component={BrowseRouter}
                                ></Route>
                            </Switch>
                        </RightSideBody>
                    </BodyWrapper>
                </HomeWrapper>
            </Router>
        </React.Fragment>
    )
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    height: 54px;
    align-items: center;
    padding: 0px 32px;
    justify-content: space-between;
    /* background / fill / secondary */

    background: #eff2f6;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`

const LeftSide = styled.div`
    width: 400px;
    display: flex;
`
const LogoImg = styled.img`
    margin-right: 16px;
`
const RightSide = styled.div`
    position: relative;
`
const RightSideBody = styled.div`
    display: flex;
    width: calc(100vw - 180px);
    height: calc(100vh - 54px);
    padding: 0 24px;
    margin: 0 0 0 180px;
    box-sizing: border-box;
    align-items: center;
    background: #fff;
    border-top-left-radius: 50px;
`

const MenuBar = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    height: calc(100vh);
    width: 200px;
    background: #eff2f6;
`
interface LinkItemProps {
    $active?: boolean
}

const LinkItem = styled(Link)<LinkItemProps>`
    border-bottom: ${(props) => (props.$active ? '4px solid #00aa13' : 'none')};
    box-sizing: border-box;
    padding: 14px;
    text-decoration: none;
    color: #2d2e34;
    font-weight: 600;
    width: 90%;
    align-self: center;
    align-items: center;
    display: flex;
    margin: 0 0 8px 0;
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`

const UserInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -4px;
    top: 36px;
    width: 200px;
    padding: 20px;
    border: 1px solid #ddd;
    /* box-shadow: 2px 2px 10px #ddd; */
    /* border-radius: 8px; */
    background: #fff;
    border-top: none;
    z-index: 9999;
`
const UserMetaData = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
`
const UserName = styled.div`
    margin-left: 16px;
`

const Logout = styled.div`
    margin: 20px 0 0 0;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`

export default withRouter(Home)
