import React from 'react'
import { Table } from 'semantic-ui-react'


const TableHeader = ({headers}) => {
    return (
        <Table.Header>
            <Table.Row>
                {
                    headers.map((header, i) => (
                        <Table.HeaderCell key={i}>{header.name}</Table.HeaderCell>
                    ))
                }
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
