import "./ItemDetailContainer.css"
import {useState, useEffect} from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  let { itemId } = useParams();
  
  useEffect(() => {
    getProductById(itemId)
    .then(response => {
        setProduct(response)
    })
  }, [itemId])
  
    return (
    <div className='ItemDetailContainer d-flex flex-row justify-content-center p-5'>
    <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer