import { useReducer } from "react"
import { CartContext } from "./CartContext"
import { cartReducer } from "./CartReducer"

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, { cart:[]})

    const agregarItemAlCarrito = (item) => {
        dispatch({
            type:"Agregar item al carrito",
            payload: item
        })
    }

    const limpiarCarrito = () => {
        dispatch({
            type:'Limpiar carrito'
        })
    }

    return(
        <CartContext.Provider value={{
            ...state,
            agregarItemAlCarrito,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}