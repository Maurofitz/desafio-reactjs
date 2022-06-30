import React from 'react'

const Item = ({product}) => {
  const {image, name}= product
console.log (image)
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
		    						<p class="price"><span class="mr-2 price-dc">$120.00</span><span class="price-sale">$80.00</span></p>
		    					</div>
	    					</div>
	    					<p class="bottom-area d-flex px-3">
							<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="index.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
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
							<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="index.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
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
							<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="index.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
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
    						<p class="bottom-area d-flex px-3">
    							<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="index.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
  )
};

export default Item;
{/* <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-3">
    				<div class="ftco-animate">
    					<div class=" d-flex align-items-end">
							<img class="card-photo" src={image} alt="Foto Producto" />
    					</div>
    					<div class="text">
    						<h2 class="mb-0"><a>{name}</a></h2>
    						<div class="d-flex mb-3">
	    						<span class="name">{name}</span>
    						</div>
    						<p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Ver mas</a> <a href="index.html" class="btn btn-secondary py-2 ml-1">Comprar</a></p>
    					</div>
    				</div>
    			</div>
        </div>
      </div>
    </section> */}