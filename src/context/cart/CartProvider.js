import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"

const carritoDefault = JSON.parse(localStorage.getItem('cart')) ?? [];
export const CartProvider = ({children}) => {

   const [cart, setCart] = useState(carritoDefault)

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));


    },[cart])

    const agregarItemAlCarrito = (item) => {

       setCart((prevCart) => {


        const articuloYaExiste = prevCart.find((carrito) => carrito.id === item.id);
        
        if(articuloYaExiste){
            articuloYaExiste.cant = articuloYaExiste.cant+item.cant;
            const newCarrito = prevCart.filter((items) => items.id !== item.id);
            return [...newCarrito, articuloYaExiste]
        }

        return [...prevCart, item]
    
    });

        

    }

    const limpiarCarrito = () => {
       setCart([]);
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarItemAlCarrito,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}