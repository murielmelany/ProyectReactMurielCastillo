import { useContext } from "react";
import logoCarrito  from "./assets/carritologo.png";
import { CartContext } from "../../../context/cart/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const {cart} = useContext(CartContext);
  const navigate = useNavigate()

  const largo = cart.length > 0 ? cart.reduce((prev, item) => item.cant + prev, 0) : 0;

  
  return (
    <div className="d-flex flex-row align-items-center gap-1" role="button" onClick={ () => navigate('/cart')}>    

    <img src={logoCarrito} alt="logocarrito" width={30} />
      <p className="align-self-center m-0"> {largo}</p>  
    </div>
  )
}

export default Cart;