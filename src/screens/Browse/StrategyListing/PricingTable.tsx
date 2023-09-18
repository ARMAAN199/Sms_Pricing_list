import React, { useEffect, useState } from 'react'
import type { TableProps } from 'antd'
import 'antd/dist/antd.css'
import { Button, Space, Table } from 'antd'
import type {
    ColumnsType,
    FilterValue,
    SorterResult,
} from 'antd/es/table/interface'

interface DataType {
    key: string
    operator: string
    per_sms_cost: number
    weight: number
    override: boolean
}

const PricingTable = ({ pricingData, country, messageType, operator }: any) => {
    const [data, setData] = useState<DataType[]>([])

    useEffect(() => {
        console.log(pricingData, country, messageType)
        const data: DataType[] = []
        if (!pricingData || !country || !messageType) return
        Object.keys(pricingData?.[country]?.[messageType]?.[operator]).forEach(
            (key) => {
                data.push({
                    key,
                    operator: key,
                    per_sms_cost:
                        pricingData[country][messageType][operator][key]
                            .per_sms_cost,
                    weight:
                        pricingData[country][messageType][operator][key].weight,
                    override:
                        pricingData[country][messageType][operator][key]
                            .override,
                })
            }
        )
        setData(data)
    }, [pricingData, country, messageType])

    const [filteredInfo, setFilteredInfo] = useState<
        Record<string, FilterValue | null>
    >({})
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({})

    const handleChange: TableProps<DataType>['onChange'] = (
        pagination,
        filters,
        sorter
    ) => {
        console.log('Various parameters', pagination, filters, sorter)
        setFilteredInfo(filters)
        setSortedInfo(sorter as SorterResult<DataType>)
    }

    // const clearFilters = () => {
    //     setFilteredInfo({})
    // }

    const clearAll = () => {
        setFilteredInfo({})
        setSortedInfo({})
    }

    // const setAgeSort = () => {
    //     setSortedInfo({
    //         order: 'descend',
    //         columnKey: 'age',
    //     })
    // }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Operator',
            dataIndex: 'operator',
            key: 'operator',
            // filters: [
            //     { text: 'Provider1', value: 'Provider1' },
            //     { text: 'Provider2', value: 'Provider2' },
            // ],
            // filteredValue: filteredInfo.operator || null,
            // onFilter: (value, record) => record.operator.includes(value as any),
            sorter: (a, b) => a.operator.localeCompare(b.operator),
            sortOrder:
                sortedInfo.columnKey === 'operator' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Per SMS Cost',
            dataIndex: 'per_sms_cost',
            key: 'per_sms_cost',
            sorter: (a, b) => a.per_sms_cost - b.per_sms_cost,
            sortOrder:
                sortedInfo.columnKey === 'per_sms_cost'
                    ? sortedInfo.order
                    : null,
            ellipsis: true,
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
            sorter: (a, b) => a.weight - b.weight,
            sortOrder:
                sortedInfo.columnKey === 'weight' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Override',
            dataIndex: 'override',
            key: 'override',
            // Assuming boolean so no sorter
            render: (override) => (override ? 'Yes' : 'No'),
        },
    ]

    return (
        <>
            <Space style={{ marginBottom: 16, float: 'left' }}>
                <Button onClick={clearAll}>Clear Sorters</Button>
            </Space>
            <Table
                columns={columns}
                dataSource={data}
                onChange={handleChange}
            />
        </>
    )
}

export default PricingTable
