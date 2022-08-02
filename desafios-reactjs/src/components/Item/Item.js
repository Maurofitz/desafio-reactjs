
import { Link } from 'react-router-dom';
import { cartContext } from "../Context/Context";
import React, { useContext } from 'react'
import "../Item/item.css"

const Item = ({product}) => {
	const {image, title, id , price}= product
  
	return (
	<div className="containerCard" class="container">   
		<div class="row">
		<div className="card" class="col-xxl-4">
			<div class="card text-white text-center mb-3">
			<div class="card-body">
				<h5 class="text-dark text-wrap fs-3 card-title">{title}</h5>
				<a href="#" class="img-prod"/> <img class="img-fluid" src={image} alt="Colorlib Template"/>
				<p class="price"><span class="text-dark mr-2 price-dc">${price}</span><span class="price-sale"></span></p>
				<p class="bottom-area d-flex px-3">
					<Link class=" align-middle d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
				</p>
			</div>
			</div>
		</div>
		</div>
	</div>	  
	)
  };
  
  export default Item;
  
