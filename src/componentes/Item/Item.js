import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, name, img, price, stock, description }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Unidades disponibles: {stock}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button href={'/item/'+id} variant="primary" >Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;