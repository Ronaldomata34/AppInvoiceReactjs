import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Header, Segment, Button } from 'semantic-ui-react'

const HeaderSection = withRouter(({ textHeader, history }) => {

    const pushNewUrl = (e) => {
        return history.push(`${history.location.pathname}/crear`)
    }

    return (
        <React.Fragment>
            <Header as='h2' attached='top' block>
                {textHeader}
            </Header>
            <Segment attached>
                <Button as={Link} color="green" onClick={pushNewUrl}>Crear</Button>
            </Segment>
        </React.Fragment>
    )
}
)

export default HeaderSection