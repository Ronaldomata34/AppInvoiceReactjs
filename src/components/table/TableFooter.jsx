import React from 'react'
import {Table, Menu, Icon} from 'semantic-ui-react'

const TableFooter = ({ headers }) => {
    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan={headers.length + 1}>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter