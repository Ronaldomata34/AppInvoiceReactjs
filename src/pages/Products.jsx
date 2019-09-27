import React from 'react'
import { Divider} from 'semantic-ui-react'
import TableContainer from '../components/table/TableContainer'
import HeaderSection from '../components/HeaderSection'
import useFetch from '../hooks/useFetch'
import url from '../config'

const Products = () => {
    const { data, isLoading } = useFetch(`${url}/products`)

    const hadleDeleteItem = (id) => {
        console.log(id)
    }

    const headers = [
        {
            name: "Nombre",
            prop: "name"
        },
        {
            name: "Codigo item",
            prop: "code"
        },
        {
            name: "Precio Venta",
            prop: "unit_price"
        },
    ]

    return (
        <React.Fragment>
            <HeaderSection 
                textHeader="Productos"
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

export default Products