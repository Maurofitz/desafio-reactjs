import React, {useContext} from "react";
import fotoCarrito from "../../Assets/carrito.png";
import { cartContext } from "../Context/Context";


const CartWidget = () => {

    const {qtyProduct} = useContext(cartContext)
    return (
        <>
        <button className="cart-btn">
           <img src={fotoCarrito} alt="Shopping Cart" className="cart-widget" />
           <p>{qtyProduct}</p>
        </button>
        </>
    );
};

export default CartWidget;