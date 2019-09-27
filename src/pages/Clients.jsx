import React from 'react'
import { Divider } from 'semantic-ui-react'
import TableContainer from '../components/table/TableContainer'
import HeaderSection from '../components/HeaderSection'
import useFetch from '../hooks/useFetch'
import url from '../config'

const Clients = () => {
    const { data, isLoading } = useFetch(`${url}/clients`)

    const hadleDeleteItem = (id) => {
        console.log(id)
    }

    const headers = [
        {
            name: "Nombre contacto",
            prop: "name"
        },
        {
            name: "Empresa",
            prop: "company_name"
        },
        {
            name: "Telefono",
            prop: "telephone"
        },
        {
            name: "Email",
            prop: "email"
        },
    ]

    return (
        <React.Fragment>
            <HeaderSection
                textHeader="Clientes"
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

export default Clients