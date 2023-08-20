//la accion siempre se va a componer de esto

// {
//     type:tipo de accion que se realizara,
//     payload: son lo datos necesario para ejecutar la accion
// }


export const cartReducer = (state, action) => {

    switch(action.type){
        case 'Agregar item al carrito':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'Limpiar carrito': 
            return {
                ...state,
                cart:[]
            }
    }

}