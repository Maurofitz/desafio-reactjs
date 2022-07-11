import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  const {image, name, id}= product
  console.log(product)
  return (
    <section class="ftco-section bg-light">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            {/* <h2 class="mb-4">nueva coleccion</h2>   */}
          </div>
        </div>   		
    	</div>
    	<div class="container">
    		<div class="row">
    			<div class="col-sm col-md-6 col-lg ftco-animate">
    				<div class="product">
    					<a href="#" class="img-prod"> <img class="img-fluid" src={image} alt="Colorlib Template"/>
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">{name}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span class="mr-2 price-dc">$120.00</span><span class="price-sale"></span></p>
		    					</div>
	    					</div>
	    					<p class="bottom-area d-flex px-3">
							<Link class=" d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-sm col-md-6 col-lg ftco-animate">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src={image} alt="Colorlib Template"/>
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">{name}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$120.00</span></p>
		    					</div>	
	    					</div>
    						<p class="bottom-area d-flex px-3">
							<Link class=" d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-sm col-md-6 col-lg ftco-animate">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src={image} alt="Colorlib Template"/>
	    					<div class="overlay"></div>
	    				</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">{name}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$23420.00</span></p>
		    					</div>	
	    					</div>
    						<p class="bottom-area d-flex px-3">
							<Link class=" d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-sm col-md-6 col-lg ftco-animate">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src={image} alt="Colorlib Template"/>
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">{name}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$13420.00</span></p>
		    					</div>	
	    					</div>
    						<p class="bottom-area d-flex px-3"/>
							<Link class=" d-flex mb-0 d-block btn btn-primary py-2 mr-1" to={`/detalle/${id}`}>Ver detalle</Link>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
  )
};

export default Item;
