import React from "react"
import CartWidget from "../Cartwidget/CartWidget";
import logo from "../../Assets/logo.png"
  
const NavBar = () => {
    return (
<section>
	<div class="p-3 text-center bg-white border-bottom">
		<div class="container">
		  <div class="row">
				<div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
					<a href="#!" class="ms-md-2">
						<img src={logo} height="35" />
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
						<CartWidget/>
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
			<a class="nav-link" href="#">home</a>
			</li>
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">About</a>
			</li>
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">Shop</a>
			</li>
			<li class="nav-item me-3 me-lg-0 d-none d-md-inline-block">
			<a class="nav-link" href="#">contact</a>
			</li>
		</ul>
	</div>
	</section>
</section>
)};
  export default NavBar;