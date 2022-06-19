import React from "react";
import './App.css';
import shoppingCart from "../Assets/img/carrito.png"

const cartWidget = () => {
    return (
        <button className="cart-btn">
            <img src={shoppingCart} alt="img shopping" className="cart-widget" />
        </button>
    );
};

export default cartWidget;