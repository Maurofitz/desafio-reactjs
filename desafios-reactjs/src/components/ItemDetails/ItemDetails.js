import ItemCount from "../ItemCount/ItemCount" ;
import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react'
import { cartContext } from "../Context/Context";




const ItemDetail = ({ product }) => {
    const [buyFinalized, setBuyfinalized] = useState (false)
    const { addProduct } = useContext(cartContext);

    const onAdd = (count) => {
        addProduct ({...product, qty :count})
        setBuyfinalized (true);
        
        
}

    return (
       <section className="detalle" class="bg-light ">
        <div class="container pb-5" className="detalle">
            <div class="row">
                <div class="col-lg-3 mt-2">
                    <div class="card mb-2">
                        <img class="card-img img-fluid" src={product.image} alt="Card image cap" id="product-detail"/>
                    </div>
                    <div class="row">
                        <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">

                            <div class="carousel-inner product-links-wap" role="listbox">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src={product.image} alt="Product Image 1"/>
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src={product.image} alt="Product Image 2"/>
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#">
                                                <img class="card-img img-fluid" src={product.image} alt="Product Image 3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-lg-7 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="h2">{product.title}</h1>
                            <p class="h3 py-2"></p>
                            <p class="py-2">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-secondary"></i>
                            </p>

                            <h6>Descripcion:</h6>
                            <p>{product.description}</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6> Colores :</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>White / Black</strong></p>
                                </li>
                            </ul>

                            <h6>Especificaciones:</h6>
                            <ul class="list-unstyled pb-3">
                                <li>Lorem ipsum dolor sit</li>
                                <li>Amet, consectetur</li>
                                <li>Adipiscing elit,set</li>
                                <li>Duis aute irure</li>
                                <li>Ut enim ad minim</li>
                                <li>Dolore magna aliqua</li>
                                <li>Excepteur sint</li>
                            </ul>

                            <div>
                                <input type="hidden" name="product-title" value="Activewear"/>
                                <div class="row">
                                    <div class="col-auto">
                                        <ul class="list-inline pb-3">
                                            <li class="list-inline-item">TALLE :
                                                <input type="hidden" name="product-size" id="product-size" value="S"/>
                                            </li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">S</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">M</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">L</span></li>
                                            <li class="list-inline-item"><span class="btn btn-success btn-size">XL</span></li>
                                        </ul>
                                        
                                    </div>
                                  
                                </div>
                                <div class="row pb-3">
                                    <div class="col d-grid">
                                    {buyFinalized
                                    ? <Link to="/cart">
                                        <button type="submit" class="btn btn-success btn-lg">Finalizar compra</button>
                                        </Link>
                                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)};

export default ItemDetail; 
