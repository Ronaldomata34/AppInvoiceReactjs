import React from 'react'
import { Header, Form, Select, Input, Button, Segment, TextArea } from 'semantic-ui-react'


const InvoiceContainer = ({invoice, handleSendInvoice, handleMethodPaymentChange}) => {
    return (
        <Segment.Group>
            <Segment clearing textAlign="center" style={{ backgroundColor: "skyblue" }}>
                <Header as="h2" floated='left'>Total</Header>
                <Header as="h2" floated='right'>{`$${invoice.total}`}</Header>

                <Button color="blue" size="big" onClick={handleSendInvoice}>Facturar $</Button>
            </Segment>

            <Segment clearing>
                <Header as="p" floated='left'>SubTotal</Header>
                <Header as="p" floated='right'>{`$${Math.round(invoice.subTotal * 100) / 100}`}</Header>
            </Segment>
            <Segment clearing>
                <Header as="p" floated='left'>Impuestos</Header>
                <Header as="p" floated='right'>{`$${Math.round((invoice.total - invoice.subTotal) * 100) / 100}`}</Header>
            </Segment>
            <Segment clearing>
                <Header as="a" size="small">Metodo de pago</Header>
                <Select fluid name="paymentMethod" onChange={handleMethodPaymentChange} placeholder='Metodo' options={[
                    { key: 'a', value: 'cash', text: 'Efectivo' },
                    { key: 'b', value: 'card', text: 'Debito' }]}
                />
            </Segment>
            <Segment clearing>
                <Header as="a" size="small">Fecha</Header>
                <Input fluid type="date" value={invoice.date} />
            </Segment>
            <Segment clearing>
                <Header as="a" size="small">Note</Header>
                <Form>
                    <TextArea placeholder='Escribe algo' />
                </Form>
            </Segment>
        </Segment.Group>
    )
}

export default InvoiceContainer