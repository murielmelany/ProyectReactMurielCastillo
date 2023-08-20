import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { CartContext } from '../../../context/cart/CartContext'
import { parseToCLP } from '../../../utils/parseCurrency'
import { Link } from 'react-router-dom'

const CartContainer = () => {

    const { cart, limpiarCarrito } = useContext(CartContext);
    const [totalCompra, setTotalCompra] = useState(0);

    useEffect(() => {

        const calcularCompraTotal = () => {

            if(cart.length > 0) {
                const total = cart.reduce((acumulador, valor) => acumulador + (valor.price * valor.cant),0);
                console.log(total);
                setTotalCompra(total);
                
            }
        }

        calcularCompraTotal();

    },[cart]);

    return (
        <Container className='p-3'>
            <Row>
                <Col lg={12}> <h1>Carro de compras</h1></Col>
                <Col lg={12}>

                    <Table  bordered hover >
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
                               cart.map(producto =>{ 
                                const total = producto.price * producto.cant;
                                
                                return (
                                <tr>
                                    <td  ><img width={"171"} height={"180"} src={producto.img} /></td>
                                    <td style={{ verticalAlign:'middle', textAlign:'center' }} >{producto.name}</td>
                                    <td  style={{ verticalAlign:'middle', textAlign:'center' }}>{producto.cant}</td>
                                    <td  style={{ verticalAlign:'middle', textAlign:'center' }}>{parseToCLP(producto.price)}</td>
                                    <td  style={{ verticalAlign:'middle', textAlign:'center' }}>{parseToCLP(total)}</td>
                                </tr>
                               )}) 
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col lg={12} className='d-flex flex-row justify-content-end'>
                    <p className='font-weight-bold h4'>Total compra: {parseToCLP(totalCompra)}</p>
                </Col>
                <Col lg={12} className='d-flex flex-row justify-content-start gap-2'>
                    <Button variant='warning' onClick={() => {limpiarCarrito(); setTotalCompra(0)}}>Limpiar carrito</Button>
                    <Link to="/checkout" variant='light' className='btn btn-light border border-dark'>Comprar</Link>
                </Col>
            </Row>

        </Container>
    )
}

export default CartContainer