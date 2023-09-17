import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { getStrategies } from '../../../actions/automationBuilder/automationBuilder.actions'
import StrategyTable from './StrategyTable'
import { format } from 'date-fns'
import {
    CircularProgress,
    Divider,
    IconButton,
    InputBase,
    Pagination,
    Paper,
} from '@mui/material'
import { SearchRounded, CancelRounded } from '@mui/icons-material'
import useReactGA_AJ from '../../../shared/hooks/useReactGA_AJ'
import { getTokenInfo } from '../../../services/utils/utils.service'
import useClickStream_AJ from '../../../shared/hooks/useClickStream_AJ'
import PricingListFilter from './PricingListFilter'
import PricingTable from './PricingTable'
import { ListConsumer } from 'antd/lib/list'
import { Skeleton } from 'antd'

const StrategyListing = (props: { isTrack: any }) => {
    // Fresh Props

    const [country, setCountry] = useState<string>('')
    const [messageType, setMessageType] = useState<string>('')
    const [pricingData, setPricingData] = useState<any>([])

    const { isTrack } = props
    const [currentPage, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchQueryInput, setSearchQueryInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [isSearch, setShowsearch] = useState<boolean>(false)
    const dispatch = useDispatch()
    const createStrategyItems = (list: []) => {
        return list.map((item: any) => {
            return {
                id: item.id,
                name: item.name,
                archived: false,
                created_at: format(new Date(item.created_at), 'dd-MM-yyyy'),
                errors: item.errors,
                redirect: item.redirect,
                status: item.status,
                updated_at: format(new Date(item.updated_at), 'dd-MM-yyyy'),
                version_count: item.version_count,
            }
        })
    }

    const fetchStrategies = useCallback(
        (page: number, query: string, pageSize: number) => {
            const searchParam = query !== '' && isSearch ? query : 'null'
            setLoading(true)
            dispatch(
                getStrategies(
                    page,
                    searchParam,
                    pageSize,
                    (res: any) => {
                        if (res) {
                            // const listItems = createStrategyItems(res.records)
                            setPricingData(res)
                            // setTotalPages(res.total_pages)
                        } else {
                            setPricingData([])
                        }
                        setLoading(false)
                    },
                    () => {
                        setLoading(false)
                    }
                )
            )
        },
        [dispatch, isSearch]
    )

    useEffect(() => {
        fetchStrategies(currentPage, 'null', 10)
    }, [currentPage])

    useEffect(() => {
        if (searchQuery !== '') {
            fetchStrategies(1, searchQuery, 100)
        }
    }, [searchQuery])

    const handlePageChange = (event: any, value: number) => {
        setPage(value)
    }
    const handleQueryChange = (event: any) => {
        setSearchQueryInput(event.target.value)
    }
    const handleSearch = (e: any) => {
        e.preventDefault()
        setShowsearch(true)
        setSearchQuery(searchQueryInput)
    }
    const clearSearch = (e: any) => {
        e.preventDefault()
        fetchStrategies(currentPage, 'null', 10)
        setSearchQuery('')
        setSearchQueryInput('')
        setShowsearch(false)
    }

    // Page tracking
    const GA_tracker_AR = useReactGA_AJ('Strategy Search')
    const clickStream_AR = useClickStream_AJ()

    return (
        <React.Fragment>
            <ListingWrapFilter>
                {loading ? <CircularProgress size={28} /> : null}
                <PricingListFilter
                    pricingData={pricingData}
                    country={country}
                    setCountry={setCountry}
                    messageType={messageType}
                    setMessageType={setMessageType}
                ></PricingListFilter>
            </ListingWrapFilter>
            <ListingWrap>
                <ListingActions>
                    {loading ? <CircularProgress size={28} /> : null}
                </ListingActions>
                <ListingWrapTable>
                    {country &&
                    messageType &&
                    pricingData[country] &&
                    pricingData[country][messageType] ? (
                        Object.keys(pricingData[country][messageType]).map(
                            (operator) => {
                                return (
                                    <TableCard>
                                        <h3>{operator}</h3>
                                        <PricingTable
                                            pricingData={pricingData}
                                            country={country}
                                            messageType={messageType}
                                            operator={operator}
                                        ></PricingTable>
                                    </TableCard>
                                )
                            }
                        )
                    ) : (
                        <Skeleton></Skeleton>
                    )}
                </ListingWrapTable>
            </ListingWrap>
        </React.Fragment>
    )
}

export default StrategyListing

const TableCard = styled.div`
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
`

const ListingWrapTable = styled.div`
    margin-top: 90px;
    width: 80%;
    overflow-y: scroll;
    height: calc(100vh - 200px);
`

const ListingWrapFilter = styled.div`
    width: 80%;
    background-color: #ffffff;
    padding: 20px;
    position: fixed;
    z-index: 999;
    border-radius: 8px;
    display: flex;
`

const ListingWrap = styled.div`
    margin: 18px 0 0;
`
const ListingActions = styled.div`
    display: flex;
    margin: 0 0 16px 0;
    align-items: center;
    justify-content: space-between;
    float: left;
`

const SearchHeader = styled.div``
const SearchText = styled.div`
    padding: 4px;
    /* font-weight: 600; */
    font-size: 20px;
`
const ActionsHeader = styled.div`
    display: flex;

    align-items: center;
    justify-content: flex-end;
`
