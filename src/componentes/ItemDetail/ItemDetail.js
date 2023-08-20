
import { useContext, useState } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { CartContext } from '../../context/cart/CartContext';
import { parseToCLP } from '../../utils/parseCurrency';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {

  const { agregarItemAlCarrito } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const notify = () => {
    toast.success('Se agrego producto al carrito!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={5}>
          <Image src={img} className='w-100' />
        </Col>
        <Col>
          <Row>
            <Col xs={12}><p className='h1' style={{ textAlign: 'initial' }}>{name}</p> </Col>
            <Col xs={12}><p className="h4 text-muted" style={{ textAlign: 'initial' }}>{description}</p> </Col>
            <Col xs={12}><p className="h2" style={{ textAlign: 'initial' }}>{parseToCLP(price)}</p> </Col>
            <Col xs={12} className='d-flex flex-row gap-3 mb-2'>
              <Button
                className='border border-black'
                variant='light'
                style={{ width: '35px', height: '35px' }}
                onClick={decrement}
              >
                -
              </Button>
              <p className='m-0 align-self-center'>{quantity}</p>
              <Button
                className='border border-black'
                variant='light'
                style={{ width: '35px', height: '35px' }}
                onClick={increment}
              >
                +
              </Button>
              <Button
                className='border border-black'
                variant='light'
                onClick={ () => {agregarItemAlCarrito({
                  name,
                  cant: quantity,
                  id,
                  price,
                  img
                });
                notify();
              }
              }
              >
                Agregar al carro
              </Button> 
            </Col>
            <Col xs={12} className='d-flex flex-row justify-content-start'> </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}


export default ItemDetail