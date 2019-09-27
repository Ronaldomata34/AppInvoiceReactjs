import React, { useState } from 'react'
import InputSection from '../components/input/InputSection'
import TableInvoiceContainer from '../components/table/TableInvoiceContainer'
import InvoiceContainer from '../components/InvoiceContainer'
import { Grid } from 'semantic-ui-react'
import url from '../config'



const NewInvoice = () => {
    let curr = new Date();
    curr.setDate(curr.getDate());
    let date = curr.toISOString().substr(0, 10);

    const [invoice, setInvoice] = useState({
        total: 0,
        client: null,
        entries: [],
        paymentMethod: "cash",
        date: date,
        note: "",
        status: "new",
        subTotal: 0,
        tax: 0

    })

    const headers = [
        {
            name: "Product",
            prop: "name",
            editable: false,
        },
        {
            name: "Cantidad",
            prop: "amount",
            editable: true,
        },
        {
            name: "Stock",
            prop: "stock",
            editable: false,
        },
        {
            name: "Precio Venta",
            prop: "unit_price",
            editable: false,
        },
        {
            name: "IVA",
            prop: "iva",
            editable: false,
        },
        {
            name: "Total",
            prop: "total",
            editable: false,
        },
        {
            name: "Subtotal",
            prop: "subTotal",
            editable: false,
        }
    ]

    const getTotal = (amount, price) => (
        amount * parseFloat(price)
    )

    const getSubTotal = (amount, price, iva) => (
        amount * parseFloat(price) - ((parseFloat(iva) / 100) * parseFloat(price) * amount)
    )

    const updateAmounts = (entries) => {
        let totalAmount = 0
        let subTotalAmount = 0
        entries.forEach(item => {
            console.log(item.total)
            totalAmount = totalAmount + item.total
            subTotalAmount = subTotalAmount + item.subTotal
        })


        setInvoice({
            ...invoice,
            entries: entries,
            total: totalAmount,
            subTotal: subTotalAmount
        })
    }


    const handleClientSelect = (client) => {
        setInvoice({
            ...invoice,
            client,
        })
    }

    const handleMethodPaymentChange = (e, data) => {
        setInvoice({
            ...invoice,
            paymentMethod: data.value
        })
    }

    const postInvoice = async () => {
        try {
            let res = await fetch(`${url}/invoices/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    notes: invoice.note,
                    status: invoice.status,
                    subtotal: invoice.subTotal.toFixed(2),
                    total: invoice.total,
                    client: invoice.client.id,
                    payment_method: invoice.paymentMethod
                })
            })
            alert("Factura agregada con exito!")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSendInvoice = (e) => {
        postInvoice()
        setInvoice({
            total: 0,
            client: null,
            entries: [],
            paymentMethod: null,
            date: date,
            note: "",
            status: "new",
            subTotal: 0,
            tax: 0

        })
    }

    const handleOnChangeAmount = (e, { id }) => {
        let value = e.target.value
        let entriesUpdated = []
        invoice.entries.forEach(item => {
            // update entry properties and push to array updated
            if (item.id === id) {
                entriesUpdated.push({
                    ...item,
                    amount: value,
                    total: getTotal(value, item.unit_price),
                    subTotal: getSubTotal(value, item.unit_price, item.iva),
                    tax: getTotal(value, item.unit_price) - getSubTotal(value, item.unit_price, item.iva)
                })
            }
            // push wihtout modify entry
            else {
                entriesUpdated.push(item)
            }
        })

        updateAmounts(entriesUpdated)
    }

    const handleDeleteSelect = (id) => {
        let items = invoice.entries.filter(el => el.id !== id)
        updateAmounts(items)
    }

    const handleEntrySelect = (entry) => {

        if (!invoice.entries.find(item => item.id === entry.id)) {
            let newEntry = {
                ...entry,
                amount: 0,
                total: 0,
            }
            setInvoice({
                ...invoice,
                entries: [
                    ...invoice.entries,
                    newEntry
                ]
            })
        } else {
            alert("Ya ha sido agregado")
        }

    }

    return (
        <React.Fragment>
            <Grid columns="3">
                <Grid.Row>
                    <Grid.Column width={12}>
                        <InputSection
                            textHeader="Crear Nueva Factura"
                            endpoint="/clients"
                            handleClient={handleClientSelect}
                            handleEntry={handleEntrySelect}
                            invoice={invoice}
                        />

                        <TableInvoiceContainer
                            headers={headers}
                            data={invoice.entries}
                            onDelete={handleDeleteSelect}
                            handleChange={handleOnChangeAmount}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <InvoiceContainer
                            invoice={invoice}
                            handleMethodPaymentChange={handleMethodPaymentChange}
                            handleSendInvoice={handleSendInvoice}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment >
    )
}

export default NewInvoice