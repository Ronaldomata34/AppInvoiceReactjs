import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Invoices from '../pages/Invoices'
import Products from '../pages/Products'
import Clients from '../pages/Clients'
import NewInvoice from '../pages/NewInvoice'
import NotFoundPage from '../pages/NotFoundPage'
import VerticalBarMenu from './sidebar/VerticalBarMenu'

import { Grid } from 'semantic-ui-react'


const Main = () => {

    const menuItems = [
        {
            path: '/facturas',
            icon: 'book',
            text: 'Facturas'
        },
        {
            path: '/productos',
            icon: 'boxes',
            text: 'Productos'
        },
        {
            path: '/clientes',
            icon: 'users',
            text: 'Clientes'
        },

    ]

    return (
        <BrowserRouter>
            <Grid columns={1} stackable>
                <Grid.Column width={1}>
                    {/* <VerticalBarMenu /> */}
                    <VerticalBarMenu
                        menuItems={menuItems}
                    />
                </Grid.Column>
                <Grid.Column width={15}>
                    <Container style={{paddingTop: "15px", paddingLeft: "0"}}>
                        {/*/Content*/}
                        <Switch>
                            <Route exact path="/facturas" component={Invoices} />
                            <Route exact path="/productos" component={Products} />
                            <Route exact path="/clientes" component={Clients} />
                            <Route exact path="/facturas/crear" component={NewInvoice} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Container>
                </Grid.Column>
            </Grid>
        </BrowserRouter >
    )
}

export default Main