import React, {useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  let {categoryId} = useParams()
  
  useEffect(() => {
    getProductsByCategory(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[] )

  return (
    <div>
        <h1 className='p-5'>{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer