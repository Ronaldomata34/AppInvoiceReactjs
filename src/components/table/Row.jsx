import React from 'react'
import { Table, Input, Button } from 'semantic-ui-react'

const Row = ({ item, i, headers, onDelete, handleChange }) =>
    <Table.Row key={`tr-${i}`}>
        {headers.map((h, k) => {
            if (h.editable) {
                return (
                    <Table.Cell key={`trc-${k}`}>
                        <Input
                            focus
                            placeholder='Cantidad'
                            type="number"
                            name={h.prop}
                            onChange={(e) => handleChange(e, item)} />
                    </Table.Cell>
                )

            } else {
                return <Table.Cell key={`trc-${k}`}>
                    {item[h.prop]}
                </Table.Cell>
            }
        }
        )}
        <Table.Cell>
            <Button color="red" onClick={() => onDelete(item.id)}>Delete</Button>
        </Table.Cell>
    </Table.Row>;

export default Row