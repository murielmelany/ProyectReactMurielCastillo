import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/cart/CartContext';
import { Link } from 'react-router-dom';
import { parseToCLP } from '../../utils/parseCurrency';

const Item = ({ id, name, img, price, stock, description }) => {

  const { agregarItemAlCarrito } = useContext(CartContext);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Unidades disponibles: {stock}
        </Card.Text>
        <Card.Text>
          {parseToCLP(price)}
        </Card.Text>
        {/* <Button href={'/item/'+id} variant="primary" >Detalles</Button> */}
        <Link to={'/item/'+id} className='btn btn-light border border-black'>
          Detalles
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;