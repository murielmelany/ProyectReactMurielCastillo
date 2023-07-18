

const products = [
    {
        id: '1',
        name: 'Mochila todo uso',
        price: '$18.990',
        category: 'mochilas',
        img: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw96e8754a/images/imagenes-productos/800/MK7J/MK7JCL859B-0700-001.jpg?sw=513&sh=654&sm=fit',
        stock: 15,
        description: 'Grande, comoda y segura'
    },
    {id: '2', name: 'Cartera uso diario', price: '$12.990', category: 'carteras', img: 'https://falabella.scene7.com/is/image/Falabella/gsc_117604586_1822315_1?wid=800&hei=800&qlt=70', stock: 15, description: 'Compacta y comoda para tu uso diario'},
    {id: '3', name: 'Porta notebooks estandar', price: '$10.990', category: 'porta-notebooks', img: 'https://cdnx.jumpseller.com/papeleria-gatobacam/image/22396534/thumb/220/220?1668524808', stock: 25, description: 'Soporta hasta 16"'},
]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const productosFiltrados = products.find((prod => prod.id === id));
            resolve(productosFiltrados);
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(category){
                resolve(products.filter(prod => prod.category === category))
            } else {
                resolve(products)
            }
            
        }, 500)
    })
}