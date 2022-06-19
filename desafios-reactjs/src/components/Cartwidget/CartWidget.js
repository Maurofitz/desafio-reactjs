import React from "react";
import './App.css';
import fotoCarrito from "../../../public/carrito.png";

const cartWidget = () => {
    return (
        <button className="cart-btn">
           <img src={fotoCarrito} alt="Shopping Cart" className="cart-widget" />
        </button>
    );
};

export default cartWidget;