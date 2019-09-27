import React from 'react'
import { withRouter } from 'react-router-dom'
import { Header, Segment, Grid, Label } from 'semantic-ui-react'
import SearchInput from './SearchInput'

const InputSection = withRouter(({ textHeader, invoice, handleClient, handleEntry, history }) => {

    return (
        <React.Fragment>
            <Header as='h2' attached='top' block>
                {textHeader}
            </Header>
            <Segment attached>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {
                                invoice.client == null ?
                                    <React.Fragment>
                                        <Header as="h4" style={{ margin: "0px" }}>Buscar Cliente</Header>
                                        <SearchInput
                                            endpoint="/clients"
                                            handleResultSelect={handleClient}
                                        />
                                    </React.Fragment>

                                    :
                                    <React.Fragment>
                                        <Header as="h4" style={{ margin: "0px" }}>Nombre del Cliente</Header>
                                        <Label as='a' color='teal' image style={{ padding: "12px" }}>
                                            <img alt="profile" src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                                            {invoice.client.name}
                                        </Label>
                                    </React.Fragment>

                            }
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h4" style={{ margin: "0px" }}>Buscar Producto</Header>
                            <SearchInput
                                endpoint="/products"
                                handleResultSelect={handleEntry}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </React.Fragment>
    )
}
)

export default InputSection