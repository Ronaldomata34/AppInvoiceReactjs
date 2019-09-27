import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

const NotFoundPage = () => (
    <Segment placeholder>
        <Header as='h1' icon textAlign='center' color="red">
            <Icon name='bolt' circular />
            <Header.Content>Page Not Found</Header.Content>
        </Header>
    </Segment>
)

export default NotFoundPage