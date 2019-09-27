import React from 'react'
import { Table } from 'semantic-ui-react'
import TableHeader from './TableHeader'
import Row from './Row'
import TableFooter from './TableFooter';

const TableInvoiceContainer = ({ headers, data, onDelete, handleChange }) => {
    return (
        <Table>
            <TableHeader
                headers={headers}
            />
            <Table.Body>
                {
                    data.map((item, i) => (
                        <Row
                            key={i}
                            item={item}
                            i={i}
                            headers={headers}
                            onDelete={onDelete}
                            handleChange={handleChange}
                        />
                    ))

                }
            </Table.Body>

            <TableFooter
                headers={headers}
            />
        </Table>
    )
}
export default TableInvoiceContainer