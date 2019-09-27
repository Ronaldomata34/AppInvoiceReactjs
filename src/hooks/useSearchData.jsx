import { useState, useEffect } from 'react'
import url from '../config'

const useSearchData = ({keyword, endpoint}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchResults = async () => {
            try {
                let res = await fetch(`${url}${endpoint}/?search=${keyword}`)
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        fetchResults()
    }, [keyword, endpoint])

    return { data, loading }
}

export default useSearchData