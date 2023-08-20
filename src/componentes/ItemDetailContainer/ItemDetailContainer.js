import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  let { itemId } = useParams();

  useEffect(() => {
    // getProductById(itemId)
    //   .then(response => {
    //     setProduct(response)
    //   })
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
      <h2>Cargandoo.....</h2>
    )
  }

  return (
    <div className='ItemDetailContainer d-flex flex-row justify-content-center p-5'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer