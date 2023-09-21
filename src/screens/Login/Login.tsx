import React from 'react'
import styled from 'styled-components/macro'
import { Redirect } from 'react-router-dom'

import {
    getCookieByName,
    parseURLQueryString,
} from '../../services/utils/utils.service'
import { URL } from '../../constants/url.constants'
import LoginPic from '../../assets/images/Login2.png'
import Google from '../../assets/images/Google.png'

const Login = () => {
    if (true || getCookieByName('johnwick')) {
        return <Redirect to={`/app`} />
    } else {
        const params = parseURLQueryString()
        const errorType = params.get('error')
        return (
            <React.Fragment>
                <LoginWrapper>
                    <LoginTiles>
                        <Tile>
                            <Gojek>Gojek</Gojek>
                            <Title>Welcome to Pricing Service</Title>
                            <Subtitle></Subtitle>
                            <LoginImage src={LoginPic}></LoginImage>
                        </Tile>
                        <Tile>
                            <Card>
                                <TitleL>Login</TitleL>

                                <SubtitleL>
                                    You can sign-in with Google SSO, using your
                                    work email address.
                                </SubtitleL>
                                <LoginButton
                                    href={`${URL.BACKEND_URL}auth/google`}
                                >
                                    <GoogleIcon src={Google}></GoogleIcon>
                                    <LoginText>Sign in with Google</LoginText>
                                </LoginButton>
                                {errorType && errorType !== null ? (
                                    <ErrorText>
                                        {errorType === 'session'
                                            ? 'Your session has expired please login again'
                                            : ''}
                                    </ErrorText>
                                ) : null}
                            </Card>
                        </Tile>
                    </LoginTiles>
                </LoginWrapper>
            </React.Fragment>
        )
    }
}

export default Login

const LoginWrapper = styled.div`
    display: flex;
    width: calc(100% - 40px);
    height: calc(100vh - 40px);
    justify-content: center;
    align-items: center;
    background: #eff2f6;
    margin: 20px;
    box-sizing: border-box;
    border-radius: 8px;
`
const LoginTiles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    align-items: center;
`
const Tile = styled.div`
    display: flex;
    flex-direction: column;
`
const Gojek = styled.div`
    font-family: 'Maison Neue', sans-serif;
    font-size: 22px;
    margin-bottom: 24px;
    text-align: left;
`
const Title = styled.div`
    font-family: 'Maison Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 64px;
    /* or 152% */

    letter-spacing: 0.01em;

    color: #000000;

    word-break: break-word;
    width: 320px;
    text-align: left;
    text-transform: capitalize;
`
const Subtitle = styled.div`
    font-family: Maison Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    /* or 144% */
    margin: 16px 0 32px;
    letter-spacing: 0.01em;

    color: #000000;
`
const Card = styled.div`
    background: #ffffff;
    /* shadow / high */
    height: 400px;
    box-shadow: 0px 12px 24px rgba(30, 44, 106, 0.15);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`
const TitleL = styled.div`
    font-family: Maison Neue Extended;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 30px;
    /* identical to box height, or 143% */

    text-align: center;
    letter-spacing: 0.006em;

    color: #000000;
`
const SubtitleL = styled.div`
    font-family: Maison Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    margin: 50px 0 20px;
    text-align: center;
    letter-spacing: 0.015em;

    /* content / muted */

    color: #8e919b;
    width: 350px;
`
const LoginImage = styled.img`
    width: 440px;
`

const LoginButton = styled.a`
    background: #ffffff;
    border: 1px solid #dbdfe7;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    padding: 16px 24px;
    align-items: center;
    text-decoration: none;
    color: #000;
`
const GoogleIcon = styled.img`
    width: 32px;
    height: 32px;
`

const LoginText = styled.div`
    color: #2d2e34;
    margin-left: 36px;
`
const ErrorText = styled.div`
    margin: 10px 0 -30px 0;
    color: #d32f2f;
`
