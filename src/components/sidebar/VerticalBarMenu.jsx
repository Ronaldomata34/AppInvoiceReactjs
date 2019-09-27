import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import MenuItem from './MenuItem'

const VerticalBarMenu = ({ menuItems }) => {
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            //onHide={() => setVisible(false)}
            vertical
            visible={true}
            width='thin'
        >
            {
                menuItems.map((item, i) => (
                    <MenuItem
                        key={i}
                        {...item}
                    />
                ))
            }
        </Sidebar>
    )
}

export default VerticalBarMenu