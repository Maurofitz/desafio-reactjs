import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const {Provider} = cartContext;

const CartCustomProvider = ({children}) => {
    const [products, setproducts] = useState([])
    const [qtyProduct , setQtyProduct] = useState (0)
    
    const getQtyProduct = () => {
        let qty = 0 ;
        products.forEach (products => qty += products.qty)
        setQtyProduct(qty);
    };
    useEffect(() => {
        getQtyProduct();
    }, [products])
   
    const addProduct = (product) => {
        if (isInCart(product.id)){
            const found = products.find (p => p.id ===product.id )
            const index = products.indexOf (found);
            const aux = [...products]
            aux[index].qty += product.qty;
            setproducts(aux)

        }else {
            setproducts ([...products,product]);
        }
    };
    const removeItem = (id) => {
        setproducts (products.filter(products=>products.id !== id));
        getQtyProduct();
    };
    const isInCart = (id) => {
    return products.some(products=> products.id === id )
    };

    const calcularTotal = () => {
        return products.reduce(
            (acum, actual) => acum + actual.price * actual.qty,
            0
        );
    };
    const clear = () => {
        setproducts ([]);
        setQtyProduct(0);
    };
    
   
    return (
        <Provider value ={{ products, calcularTotal, addProduct,removeItem,isInCart,getQtyProduct,clear,qtyProduct}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;