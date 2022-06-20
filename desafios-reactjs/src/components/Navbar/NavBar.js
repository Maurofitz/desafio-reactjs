import React from "react"
import CartWidget from "../Cartwidget/CartWidget";

const menuItems = [
    {
      id: "1",
      label: "Home",
    },
    {
      id: "2",
      label: "About",
    },
    {
      id: "3",
      label: "Shop",
    },
    {
      id: "4",
      label: "Contact",
    },
  ];

  const NavBar = () => {
    return (
        <div className="nav">
            <h1 className="nav-logo">ESHOP</h1>
            <div className="nav-items">
                {menuItems.map((item) => (
                <a href="/" className="nav-item" key={menuItems.id}>{item.label}</a>
              ))}
            </div>
            <div className="cart">
            <CartWidget/>
            </div>
        </div>
    );
  };
  export default NavBar;