import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

const MenuItem = ({ path, icon, text }) => {
    return (
        <Menu.Item as={Link} to={path}>
            <Icon name={icon} />
            {text}
        </Menu.Item>
    )
}

export default MenuItem