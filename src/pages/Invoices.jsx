import React from 'react'
import { Divider } from 'semantic-ui-react'
import TableContainer from '../components/table/TableContainer'
import useFetch from '../hooks/useFetch'
import HeaderSection from '../components/HeaderSection'
import url from '../config'

const Invoices = () => {
    const { data, isLoading } = useFetch(`${url}/invoices`)

    const hadleDeleteItem = (id) => {
        console.log(id)
    }

    const headers = [
        {
            name: "Cliente",
            prop: "client"
        },
        {
            name: "Número de factura",
            prop: "id"
        },
        {
            name: "Fecha",
            prop: "date"
        },
        {
            name: "Total",
            prop: "total"
        },
        {
            name: "Estado",
            prop: "status"
        },
    ]

    return (
        <React.Fragment>
            <HeaderSection
                textHeader="Facturas"
            />
            <Divider />
            <TableContainer
                headers={headers}
                data={data}
                onDelete={hadleDeleteItem}
                isLoading={isLoading}
            />
        </React.Fragment>

    )
}

export default Invoices