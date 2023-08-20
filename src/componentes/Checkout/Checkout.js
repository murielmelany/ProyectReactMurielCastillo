import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import { CartContext } from '../../context/cart/CartContext';
import { parseToCLP } from '../../utils/parseCurrency';

const Checkout = () => {

    const { cart, limpiarCarrito } = useContext(CartContext);
    const [totalCompra, setTotalCompra] = useState(0);

    useEffect(() => {

        const calcularCompraTotal = () => {

            if (cart.length > 0) {
                const total = cart.reduce((acumulador, valor) => acumulador + (valor.price * valor.cant), 0);
                setTotalCompra(total);

            }
        }

        calcularCompraTotal();

    }, [cart]);

    return (
        <Container>
            <Row className='gap-4'>
                <Col lg={12}><h1 className='h1 my-2'>Finalizar Compra</h1></Col>
                <Col lg={12}>
                    <Row className='d-flex flex-row justify-content-center gap-2'>
                            <Col lg={5} md={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre Completo</Form.Label>
                                    <Form.Control type="text" placeholder="EJ: Anibal Gallardo Castillo" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control type="text" placeholder="Ej: Los flamencos 14540" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ej: correo@correo.cl" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Teléfono de contacto</Form.Label>
                                    <Form.Control type="number" placeholder="Ej: 987654321" />
                                </Form.Group>
                            </Col>
                       
                    </Row>
                </Col>
                <Col lg={12}>

                    <Table bordered hover >
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                cart.map(producto => {
                                    const total = producto.price * producto.cant;

                                    return (
                                        <tr>
                                            <td  ><img width={"171"} height={"180"} src={producto.img} /></td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }} >{producto.name}</td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{producto.cant}</td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{parseToCLP(producto.price)}</td>
                                            <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{parseToCLP(total)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col lg={12} className='d-flex flex-row justify-content-end'>
                    <p className='font-weight-bold h4'>Total compra: {parseToCLP(totalCompra)}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout