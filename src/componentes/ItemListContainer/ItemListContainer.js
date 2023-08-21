import React, { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { Col, Container, Row, Spinner } from 'react-bootstrap'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let { categoryId } = useParams()

  useEffect(() => {

    const itemRef = collection(db, "items");

    const q = categoryId ? query(itemRef, where("category", "==", categoryId)) : itemRef;

    getDocs(q)
      .then((resp) => {
        const dataParsed = resp.docs.map((item) => {
          return {
            id: item.id,
            ...item.data()
          }
        });

        setProducts(dataParsed)

      })
      .finally(() => {
        setLoading(false);
      })

  }, [categoryId])

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
    <div>
      <h1 className='p-5'>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer