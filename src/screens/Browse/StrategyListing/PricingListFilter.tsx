import { Autocomplete, TextField } from '@mui/material'
import { Select, Space, Typography } from 'antd'
import { set } from 'date-fns'
import { useEffect, useState } from 'react'

const { Title } = Typography

const PricingListFilter = ({
    pricingData,
    country,
    setCountry,
    messageType,
    setMessageType,
}: any) => {
    const [countryOptions, setCountryOptions] = useState<any>([])
    const [messageTypeOptions, setMessageTypeOptions] = useState<any>([])

    useEffect(() => {
        console.log(pricingData)
        if (!pricingData) return
        const options = Object.keys(pricingData).map((country) => {
            return { value: country, label: country }
        })
        console.log(options)
        setCountryOptions(options)
    }, [pricingData])

    useEffect(() => {
        console.log(pricingData, country, pricingData[country])
        setMessageType('')
        if (!pricingData || !country || !pricingData[country]) return
        const options = Object.keys(pricingData[country]).map((messageType) => {
            return { value: messageType, label: messageType }
        })
        setMessageTypeOptions(options)
    }, [pricingData, country])

    return (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '50px',
            }}
        >
            <Title level={5} style={{ color: '#595959', paddingTop: '10px' }}>
                Find pricing in
            </Title>
            &nbsp; &nbsp;
            <Autocomplete
                renderInput={(params) => (
                    <TextField {...params} size="small" label="Country" />
                )}
                isOptionEqualToValue={(option, value) => option.value === value}
                style={{
                    width: 200,
                    height: '30px',
                }}
                value={country}
                onChange={(event, newValue) => {
                    setCountry(newValue?.value)
                }}
                options={countryOptions}
            />
            &nbsp; &nbsp;
            <Title level={5} style={{ color: '#595959', paddingTop: '10px' }}>
                For message type
            </Title>
            &nbsp; &nbsp;
            <Autocomplete
                style={{
                    width: 200,
                    height: '30px',
                    padding: '0 10px',
                }}
                isOptionEqualToValue={(option, value) => option.value === value}
                renderInput={(params) => (
                    <TextField {...params} size="small" label="Message Type" />
                )}
                value={messageType}
                onChange={(event, newValue) => {
                    setMessageType(newValue?.value)
                }}
                options={messageTypeOptions}
            />
        </div>
    )
}

export default PricingListFilter
