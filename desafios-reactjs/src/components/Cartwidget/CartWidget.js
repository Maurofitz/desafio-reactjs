import React from "react";
import fotoCarrito from "../../Assets/carrito.png";

const CartWidget = () => {
    return (
        <button className="cart-btn">
           <img src={fotoCarrito} alt="Shopping Cart" className="cart-widget" />
        </button>
    );
};

export default CartWidget;