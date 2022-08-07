
import { Link } from 'react-router-dom';
import { cartContext } from "../Context/Context";
import React, { useContext } from 'react'
import "../Item/item.css"

const Item = ({product}) => {
	const {image, title, id , price , description}= product
  
	return (
		<>
		<div className="divItems">
		<div className="card1">
			<h3 className="h3Items">{title}</h3>
			<img className="img1" src={image} alt="img" />
			<p>{description}</p>
			<h4><span>${price}</span></h4>
			
			<Link class=" align-middle d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
			</div>
		</div>
	</>
	)
  };
  
  export default Item;
