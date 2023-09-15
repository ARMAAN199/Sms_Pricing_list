import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
    useHistory,
    useParams,
} from 'react-router-dom'
import Graph from '../../assets/images/Graph.svg'

import StrategyListing from './StrategyListing/StrategyListing'

interface BrowseParams {
    listing: string
}

const BrowseListing = () => {
    const isTrack = false
    const { listing } = useParams<BrowseParams>()
    const [selectedListing, changeListing] = useState(
        listing ? listing : 'Sms_Pricing'
    )

    useEffect(() => {
        changeListing(listing ? listing : 'Sms_Pricing')
    }, [listing])

    return (
        <React.Fragment>
            <BodyBox>
                <BoxInfo>
                    {/* <BoxTitle>
                        <BoxIcon src={Graph}></BoxIcon>
                        <Breadcrumbs aria-label="breadcrumb">
                            <div>Browse</div>
                            <SelectedList onClick={handleClick}>
                                {selectedListing} <ArrowDropDownRounded />
                            </SelectedList>
                        </Breadcrumbs>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuSelect}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleMenuSelect}>
                                Sms_Pricing
                            </MenuItem>
                        </Menu>
                    </BoxTitle> */}
                    <BoxNavigation></BoxNavigation>
                </BoxInfo>
                {selectedListing === 'Sms_Pricing' ? (
                    <StrategyListing isTrack={isTrack} />
                ) : null}
            </BodyBox>
        </React.Fragment>
    )
}

export default BrowseListing

const BodyBox = styled.div`
    background: #ffffff;
    border-radius: 12px;
    min-height: calc(100vh - 60px);
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    /* flex-basis: 48%; */
    flex-direction: column;
    min-width: 660px;
    margin: 0 16px;
    box-sizing: border-box;
    width: 100%;
`

const BoxInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const BoxNavigation = styled.div``
