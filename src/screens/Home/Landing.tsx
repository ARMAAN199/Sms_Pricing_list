import React from 'react'
import styled from 'styled-components/macro'
import Explore from '../../assets/images/Explore.svg'
import Track from '../../assets/images/Track.svg'
import Hero from '../../assets/images/Hero.svg'
import Money from '../../assets/images/Money.svg'
import Time from '../../assets/images/Time.svg'
import Success from '../../assets/images/Success.svg'
import Fail from '../../assets/images/Fail.svg'
import Hammer from '../../assets/images/Hammer.svg'
import Graph from '../../assets/images/Graph.svg'
import { Button } from 'antd'
import { getTokenInfo } from '../../services/utils/utils.service'

import {
    SearchRounded,
    ArrowForwardRounded,
    AddRounded,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Landing = () => {
    const name = getTokenInfo('given_name')
        ? getTokenInfo('given_name')
        : getTokenInfo('name')

    return (
        <LandingWrapper>
            <WelcomeBox>
                <WelcomeInfo>
                    <WelcomeTitle>
                        Welcome {name}! How can we help you today?
                    </WelcomeTitle>
                    <WelcomeStats>
                        <StatsItem>
                            <StatsImage src={Money}></StatsImage>
                            <StatsWrap>
                                <StatsValue>Rp 120,000</StatsValue>
                                <StatsTitle>Cost saved</StatsTitle>
                            </StatsWrap>
                        </StatsItem>
                        <StatsItem>
                            <StatsImage src={Time}></StatsImage>
                            <StatsWrap>
                                <StatsValue>2540 mins</StatsValue>
                                <StatsTitle>Time saved</StatsTitle>
                            </StatsWrap>
                        </StatsItem>
                        <DurationTitle>in the last 7 days.</DurationTitle>
                    </WelcomeStats>
                </WelcomeInfo>
                <MicImage src={Hero}></MicImage>
            </WelcomeBox>
            <MainBody>
                <BodyBox>
                    <BoxInfo>
                        <BoxTitle>
                            <BoxIcon src={Hammer}></BoxIcon>
                            Explore
                        </BoxTitle>
                        <BoxNavigation>
                            <Button icon={<ArrowForwardRounded />}></Button>
                        </BoxNavigation>
                    </BoxInfo>
                    <BoxDescription>
                        <BoxImage src={Explore}></BoxImage>
                        <BoxText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </BoxText>
                    </BoxDescription>
                    <BoxCardWrap>
                        <BoxCard>
                            <CardTitle>Browse Automations</CardTitle>
                            <CardText>
                                You can create strategy by picking from an
                                existing configuration
                            </CardText>

                            <Link to={'/app/browse'}>
                                <Button icon={<SearchRounded />}>Browse</Button>
                            </Link>
                        </BoxCard>
                        <BoxCard>
                            <CardTitle>Build</CardTitle>
                            <CardText>
                                Start creating a new strategy from scratch here.
                            </CardText>
                            <Link to={'/app/build'}>
                                <Button icon={<AddRounded />}>Create</Button>
                            </Link>
                        </BoxCard>
                    </BoxCardWrap>
                </BodyBox>
                <BodyBox>
                    <BoxInfo>
                        <BoxTitle>
                            <BoxIcon src={Graph}></BoxIcon>
                            Track
                        </BoxTitle>
                        <BoxNavigation>
                            <Button icon={<ArrowForwardRounded />}></Button>
                        </BoxNavigation>
                    </BoxInfo>
                    <BoxDescription>
                        <BoxImage src={Track}></BoxImage>
                        <BoxText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </BoxText>
                    </BoxDescription>
                    <BoxRow>
                        <NumbersBox>
                            <NumberImage src={Money}></NumberImage>
                            <NumberValue>120,000,000</NumberValue>
                            <NumberTitle>Cost saved (Rp.)</NumberTitle>
                        </NumbersBox>
                        <NumbersBox>
                            <NumberImage src={Time}></NumberImage>
                            <NumberValue>2540</NumberValue>
                            <NumberTitle>Time saved (mins)</NumberTitle>
                        </NumbersBox>
                    </BoxRow>
                    <BoxRow>
                        <NumbersBox>
                            <NumberImage src={Success}></NumberImage>
                            <NumberValue>1200</NumberValue>
                            <NumberTitle>Successfull Stratergies</NumberTitle>
                        </NumbersBox>
                        <NumbersBox>
                            <NumberImage src={Fail}></NumberImage>
                            <NumberValue>345</NumberValue>
                            <NumberTitle>Failed Stratergies</NumberTitle>
                        </NumbersBox>
                    </BoxRow>
                </BodyBox>
            </MainBody>
        </LandingWrapper>
    )
}

export default Landing

const LandingWrapper = styled.div`
    max-width: 1440px;
`
const WelcomeBox = styled.div`
    display: flex;
    height: 179px;
    left: 40px;
    width: 100%;
    /* background / fill / secondary */
    align-items: center;
    background: #eff2f6;
    border-radius: 12px;
    justify-content: space-between;
    padding: 0 24px 0 40px;
    box-sizing: border-box;
`

const WelcomeInfo = styled.div`
    /* padding: 40px; */
`
const MicImage = styled.img`
    width: 230px;
    height: 133px;
`

const WelcomeTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    /* or 142% */

    letter-spacing: 0.003em;

    /* content / primary */

    color: #2d2e34;
`

const MainBody = styled.div`
    width: 100%;
    display: flex;
    margin-top: 36px;
    justify-content: space-between;
`
const BodyBox = styled.div`
    background: #eff2f6;
    border-radius: 12px;
    min-height: 400px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-basis: 48%;
    flex-direction: column;
    min-width: 660px;
    max-width: 660px;
    margin: 0 16px;
    box-sizing: border-box;
`

const BoxInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
const BoxTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    /* content / primary */

    color: #2d2e34;
`
const BoxIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`
const BoxNavigation = styled.div``

const BoxDescription = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    min-height: 134px;
    margin-bottom: 36px;
`
const BoxImage = styled.img``
const BoxText = styled.div`
    width: 263px;
`
const BoxCardWrap = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`
const BoxCard = styled.div`
    background: #ffffff;
    /* shadow / low */

    box-shadow: 0px 2px 12px rgba(27, 28, 34, 0.08);
    border-radius: 8px;
    width: 294px;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
`
const CardText = styled.div`
    margin: 24px 0;
    max-width: 250px;
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.025em;

    /* content / secondary */

    color: #32333a;
`

const BoxRow = styled.div`
    display: flex;
    margin: 12px 0;
`
const NumbersBox = styled.div`
    background: #ffffff;
    border-radius: 6px;
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    margin: 0 12px;
`
const NumberImage = styled.img`
    width: 40px;
    height: 40px;
`
const NumberValue = styled.div`
    font-family: Maison Neue Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    /* or 143% */

    letter-spacing: 0.008em;

    /* content / secondary */
    margin-top: 5px;
    color: #32333a;
`
const NumberTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.01em;

    /* content / secondary */

    color: #32333a;
`

const WelcomeStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
`
const StatsItem = styled.div`
    display: flex;
    align-items: center;
`
const StatsImage = styled.img`
    height: 48px;
    width: 48px;
    margin-right: 8px;
`
const StatsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StatsValue = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #32333a;
`
const StatsTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: #8e919b;
`
const DurationTitle = styled.div`
    font-family: Maison Neue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    /* or 142% */

    letter-spacing: 0.003em;

    /* content / primary */

    color: #2d2e34;
`
