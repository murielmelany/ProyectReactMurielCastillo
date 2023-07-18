
import { Col, Container, Row } from 'react-bootstrap';
import Item from '../Item/Item'
import React from 'react'

const ItemList = ({products}) => {

    return (
        <Container className = 'ListGroup'>
          <Row className='d-flex flex-row justify-content-center gap-5'>
            {products.map(prod => <Col xs={12} md={3} lg={3} className='d-flex flex-row justify-content-center'><Item key ={prod.id}{...prod} /> </Col>)}
          </Row>
        </Container>
      );
    
  
}

export default ItemList