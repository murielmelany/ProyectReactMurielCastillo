import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { Col, Container, Row, Spinner } from "react-bootstrap"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  let { itemId } = useParams();

  useEffect(() => {
    const itemRedf = doc(db, "items", itemId);

    getDoc(itemRedf)
      .then((item) => {
        setProduct({
          id: item.id,
          ...item.data()
        })
      })
      .finally(() => {
        setLoading(false);
      })
  }, [itemId]);

  if (loading) {
    return (
      <Container>
        <Row>
          <Col lg={12} className="d-flex flex-row justify-content-center my-5">
            <Spinner animation="border" variant="info" size="lg" />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div className='ItemDetailContainer d-flex flex-row justify-content-center p-5'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer