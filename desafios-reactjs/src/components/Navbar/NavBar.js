import React from "react"
import CartWidget from "../Cartwidget/CartWidget";
import logo from "../../Assets/logo.png"
import { Link, NavLink } from "react-router-dom";
  
const NavBar = () => {
	const categories = [
        { name: "electronics", id: 0, route: "/category/electronics" },
        { name: "jewelery", id: 1, route: "/category/jewelery" },
        { name: "men's clothing", id: 2, route: "/category/men's clothing" },
        { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    ];

    return (
<section>
	<div class="p-3 text-center bg-white border-bottom">
		<div class="container">
		  <div class="row">
				<div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
					<a href= "index.html" class="ms-md-2">
					<Link to="/"><img src={logo} alt="logo" height="35"/></Link>
					</a>
				</div>
				<div class="col-md-4">
					<form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
						<input autocomplete="off" type="search" class="form-control rounded" placeholder="Search" />
						<span class="input-group-text border-0 d-none d-lg-flex"><i class="fas fa-search"></i></span>
					</form>
				</div>
				<div class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
					<div class="d-flex">
						<a class="text-reset me-3" href="#">
						<div className="cart">
						<Link to="/cart"><CartWidget /></Link>
						</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<section class="navbar navbar-expand-lg navbar-light bg-white">
	<div class="container justify-content-center justify-content-md-between">
		<ul class="navbar-nav flex-row">
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			{categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}
			</li>
			 {/* <li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">About</a>
			</li>
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">Shop</a>
			</li>
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">contact</a>
			</li> */}
		</ul>
	</div>
	</section>
</section>
)};
  export default NavBar;