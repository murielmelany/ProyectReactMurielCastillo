import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner, Table } from 'react-bootstrap'
import { CartContext } from '../../context/cart/CartContext';
import { parseToCLP } from '../../utils/parseCurrency';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Checkout = () => {

    const { cart, limpiarCarrito } = useContext(CartContext);
    const [totalCompra, setTotalCompra] = useState(0);
    const [formulario, setFormulario] = useState({});
    const [pedidoId, setPedidoId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormulario((prevFormulario) => {
            return {
                ...prevFormulario,
                [e.target.id]: e.target.value
            }
        })

    }


    const guardarOrden = (e) => {
        e.preventDefault();
        if (formulario.email !== formulario.email_validacion) {
            toast.error('Los correos no son iguales.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            setLoading(true)
            const orden = {
                cart,
                client: formulario,
                totalCompra
            }
            const pedidosRef = collection(db, "order");
            addDoc(pedidosRef, orden)
                .then((doc) => {
                    setPedidoId(doc.id);
                    limpiarCarrito();
                }).finally(() => { setLoading(false)})
        }
    }

    useEffect(() => {

        const calcularCompraTotal = () => {

            if (cart.length > 0) {
                const total = cart.reduce((acumulador, valor) => acumulador + (valor.price * valor.cant), 0);
                setTotalCompra(total);

            }
        }

        calcularCompraTotal();

    }, [cart]);

    if (pedidoId) {
        return (
            <Container>
                <Row className='mt-5'>
                    <Col lg={12}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 448 512" style={{ fill: "#198754" }}><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" /></svg>
                    </Col>
                    <Col lg={12} className='mt-3'>
                        <h1 className='h1'>Su pedido #{pedidoId} se ha generado con exito!</h1>
                    </Col>
                </Row>
            </Container>)
    }

    return (
        <Container>
            <Form onSubmit={guardarOrden} >
                <Row className='gap-4'>
                    <Col lg={12}><h1 className='h1 my-2'>Finalizar Compra</h1></Col>
                    <Col lg={12}>

                        <Row className='d-flex flex-row justify-content-center gap-2'>


                            <Col lg={5} md={12}>
                                <Form.Group hasValidation>
                                    <Form.Label>Nombre Completo</Form.Label>
                                    <Form.Control onChange={handleChange} required id='name' type="text" placeholder="EJ: Anibal Gallardo Castillo" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={12}>
                                <Form.Group>
                                    <Form.Label>Teléfono de contacto</Form.Label>
                                    <Form.Control onChange={handleChange} required id='phone' type="number" placeholder="Ej: 987654321" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={12}>
                                <Form.Group>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control onChange={handleChange} required id='email' type="email" placeholder="Ej: correo@correo.cl" />
                                </Form.Group>
                            </Col>

                            <Col lg={5} md={12}>
                                <Form.Group>
                                    <Form.Label>Confirme correo electrónico</Form.Label>
                                    <Form.Control onChange={handleChange} required id='email_validacion' type="email" placeholder="Ej: correo@correo.cl" />
                                </Form.Group>
                            </Col>
                            <Col lg={10} md={12}>
                                <Form.Group>
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control onChange={handleChange} required id='address' type="text" placeholder="Ej: Los flamencos 14540" />
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
                                                <td  ><img alt={producto.name} width={"171"} height={"180"} src={producto.img} /></td>
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
                    <Col lg={12} className='d-flex flex-row justify-content-center gap-3'>
                        <Button type='submit'>
                            {loading &&
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            }
                            Finalizar compra
                        </Button>
                        <Link to="/">Seguir comprando</Link>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Checkout