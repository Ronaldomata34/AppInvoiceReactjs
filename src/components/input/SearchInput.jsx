import React, { useState } from 'react'
import { Search, Grid } from 'semantic-ui-react'
import useSearchData from '../../hooks/useSearchData'

const SearchInput = ({ endpoint, handleResultSelect }) => {
    const [value, setValue] = useState("")
    const { data, isLoading } = useSearchData({
        endpoint,
        keyword: value
    })

    const handleSearchChange = (e) => {
        //setIsLoadig(true)
        setValue(e.target.value)
        //setIsLoadig(false)
    }

    const handleResult = (e, {result }) => {
        setValue("")
        console.log(result)
        handleResultSelect(result)
    }

    const resultRenderer = ({ id, name }) => {
        return (
            <li key={id}>{name}</li>
        )
    }

    return (<Grid>
        <Grid.Column width={6}>
            <Search
                loading={isLoading}
                onResultSelect={handleResult}
                resultRenderer={resultRenderer}
                onSearchChange={handleSearchChange}
                results={data}
                value={value}
                //{...this.props}
            />
        </Grid.Column>
    </Grid>)
}

export default SearchInput