import React from 'react'
import { Table, Dimmer, Loader, Segment } from 'semantic-ui-react'
import TableHeader from '../table/TableHeader'
import TableFooter from '../table/TableFooter'
import Row from '../table/Row'

const TableContainer = ({ headers, data, onDelete, isLoading }) => {
    return (
        <Segment>
            <Table celled compact="very">
                <TableHeader
                    headers={headers}
                />
                <Dimmer active={isLoading} inverted>
                    <Loader inverted />
                </Dimmer>
                <Table.Body>
                    {
                        data.map((item, i) => (
                            <Row
                                item={item}
                                i={i}
                                headers={headers}
                                onDelete={onDelete}
                            />
                        ))

                    }
                </Table.Body>

                <TableFooter
                    headers={headers}
                />

            </Table>
        </Segment>

    )
}

export default TableContainer