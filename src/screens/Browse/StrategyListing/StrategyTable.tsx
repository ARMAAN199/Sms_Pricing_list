import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Skeleton, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'

import FilterListIcon from '@mui/icons-material/FilterList'

import React, { useMemo } from 'react'
import styled from 'styled-components/macro'

import {
    ErrorRounded,
    CheckCircle,
    DeleteForeverRounded,
    ArrowCircleRightRounded,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order: any, orderBy: any) {
    return order === 'desc'
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index])
    stabilizedThis.sort((a: any, b: any) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map((el: any) => el[0])
}

function EnhancedTableHead(props: any) {
    const { itemsLabels } = props

    return (
        <TableHead>
            <TableRow>
                {itemsLabels.map((headCell: string) => (
                    <TableCell key={headCell} align={'left'}>
                        <TableHeading>{headCell}</TableHeading>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

EnhancedTableHead.propTypes = {
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,

    itemsLabels: PropTypes.array.isRequired,
}

const EnhancedTableToolbar = (props: any) => {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Strategies
            </Typography>

            <Tooltip title="Filter list">
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
        </Toolbar>
    )
}

EnhancedTableToolbar.propTypes = {}

const StatetoColorMap: any = {
    draft: '#ffeb3b',
    processing: '#2196f3',
    validated: '#88a3b9',
    ready: '#8bc34a',
    live: '#4caf50',
}

interface ITableprops {
    items: any[]
    loading?: boolean
    pageSize?: number
    isTrack?: boolean
}

export default function EnhancedTable(props: ITableprops) {
    const order = 'asc'
    const orderBy = 'Name'

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = 0

    const createSkeletons = (size: number) => {
        let skeletons = []
        for (let i = 0; i <= size; i++) {
            skeletons.push(
                <TableRow
                    key={i}
                    style={{
                        height: 53 * emptyRows,
                    }}
                >
                    <TableCell component="th" scope="row" padding="normal">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell align="left">
                        <Skeleton variant="rectangular" />
                    </TableCell>
                </TableRow>
            )
        }
        return skeletons
    }
    const skeletons = useMemo(() => createSkeletons(10), [])

    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer sx={{ maxHeight: 'calc(100vh - 254px)' }}>
                        <Table
                            stickyHeader
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                itemsLabels={[
                                    'id',
                                    'Name',
                                    'Created At',
                                    'Updated At',
                                    'Errors',
                                    'Status',
                                    'Actions',
                                ]}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}

                                {props.loading ? (
                                    skeletons
                                ) : !props.loading &&
                                  props.items.length === 0 ? (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="normal"
                                        >
                                            --
                                        </TableCell>
                                        <TableCell align="left">--</TableCell>
                                        <TableCell align="left">
                                            No result's found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    props.items.map((row: any, index: any) => {
                                        const labelId = `enhanced-table-checkbox-${index}`

                                        return (
                                            <TableRow
                                                hover
                                                //   onClick={(event) => handleClick(event, row.name)}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.name}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="normal"
                                                >
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="left">
                                                    <FlowLink
                                                        to={                                                
                                                            props.isTrack  
                                                                ? `/app/track/${row.id}`
                                                                : `/app/build/create/${row.id}`
                                                            }
                                                    >
                                                        <Name>
                                                            {row.name}&nbsp;
                                                            <ArrowCircleRightRounded
                                                                sx={{
                                                                    fontSize: 20,
                                                                    color:
                                                                        'rgb(31 68 228 / 85%)',
                                                                }}
                                                            />
                                                        </Name>
                                                    </FlowLink>
                                                </TableCell>
                                                <TableCell align="left">
                                                    {row.created_at}
                                                </TableCell>
                                                <TableCell align="left">
                                                    {row.updated_at}
                                                </TableCell>
                                                <TableCell align="left">
                                                    <ErrorIcon
                                                        isError={
                                                            row.errors &&
                                                            Object.keys(
                                                                row.errors
                                                            ).length
                                                        }
                                                    >
                                                        {row.errors &&
                                                        Object.keys(row.errors)
                                                            .length ? (
                                                            <Tooltip
                                                                title={`Strategy has ${
                                                                    Object.keys(
                                                                        row.errors
                                                                    ).length
                                                                } errors`}
                                                            >
                                                                <ErrorRounded />
                                                            </Tooltip>
                                                        ) : (
                                                            <CheckCircle />
                                                        )}
                                                    </ErrorIcon>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Status status={row.status}>
                                                        <StatusDot></StatusDot>
                                                        {row.status}
                                                    </Status>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <DeleteIcon>
                                                        <Tooltip
                                                            title={`Delete Strategy (Coming soon)`}
                                                        >
                                                            <DeleteForeverRounded />
                                                        </Tooltip>
                                                    </DeleteIcon>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </React.Fragment>
    )
}

const TableHeading = styled.div`
    text-decoration: capitalize;
    font-weight: bold;
`
interface statusProps {
    status: any
}

const Status = styled.div<statusProps>`
    display: flex;
    align-items: center;
    color: ${(props) => (props.status === 'draft' ? '#00695c' : '#fff')};
    background-color: ${(props) => StatetoColorMap[props.status]};
    padding: 6px;
    border-radius: 8px;
    box-sizing: border-box;
    width: 90px;
    font-size: 14px;
    text-transform: capitalize;
`
const Name = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        text-decoration: underline;
    }
`
const StatusDot = styled.div`
    height: 8px;
    width: 8px;
    background: linear-gradient(305deg, #bfbfbf, white);
    margin-right: 8px;
    border-radius: 50%;
`

interface iconsProps {
    isError: boolean
}

const ErrorIcon = styled.div<iconsProps>`
    color: ${(props) => (props.isError ? '#f3536b' : '#388e3c')};
    margin-right: 8px;
    margin-top: 2px;
`
const DeleteIcon = styled.div`
    color: #d2d2d2;
    cursor: not-allowed;
    margin-right: 8px;
    margin-top: 2px;
`
const FlowLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
`
