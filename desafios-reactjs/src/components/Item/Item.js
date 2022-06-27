import React from 'react'


const Item = ({product}) => {
  const {img, name}= product

  return (
    <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-4">
    				<div class="car-wrap rounded ftco-animate">
    					<div class="img rounded d-flex align-items-end" img={img}>
    					</div>
    					<div class="text">
    						<h2 class="mb-0"><a href={img}>{name}</a></h2>
    						<div class="d-flex mb-3">
	    						<span class="cat">{name}</span>
    						</div>
    						<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
    					</div>
    				</div>
    			</div>
        </div>
      </div>
    </section>
  )
};

export default Item
