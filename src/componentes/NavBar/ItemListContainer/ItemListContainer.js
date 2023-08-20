import React, {useState, useEffect } from 'react'
import { getProductsByCategory } from '../../../asyncMock'
import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../firebase'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  let {categoryId} = useParams()
  
  useEffect(() => {
    
    const itemRef = collection(db,"items");

    const q = categoryId ? query(itemRef,where("category","==",categoryId )) : itemRef;

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

  }, [categoryId])

  return (
    <div>
        <h1 className='p-5'>{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer