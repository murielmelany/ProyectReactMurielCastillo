
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, name, category, img, price, stock, description }) => {

  return (
    <Card  style={{ width: '18rem' }} >
      <Card.Img variant="top" src= {img} />
      <Card.Body>
        <Card.Text>
        Categoria: {category}
        </Card.Text>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Title>{price}</Card.Title>
        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  );
}


export default ItemDetail