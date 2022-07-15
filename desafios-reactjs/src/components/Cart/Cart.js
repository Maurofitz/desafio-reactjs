import React, { useContext } from 'react'
import { cartContext } from "../Context/Context";

const Cart = () => {
  
  const {products , removeItem } = useContext (cartContext);

  if (products.length === 0) {
    return <h2>Está vacío tu carrito</h2>;
  }
  return (
    <div>
    <div>
        {products.map((product) => (
         <div class="site-section">
         <div class="container">
           <div class="row mb-5">
             <form class="col-md-12" method="post">
               <div class="site-blocks-table">
                 <table class="table table-bordered">
                   <thead>
                     <tr>
                       <th class="product-thumbnail">Image</th>
                       <th class="product-name">Product</th>
                       <th class="product-price">Price</th>
                       {/* <th class="product-quantity">Quantity</th> */}
                       <th class="product-total">Total</th>
                       <th class="product-remove">Remove</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td class="product-thumbnail">
                         <img src={product.image} width="40 px" alt="Image" class="img-fluid"/>
                       </td>
                       <td class="product-name">
                         <p class="h5">{product.title}</p>
                       </td>
                       <td>${product.price}</td>
                       {/* <td>
                       </td> */}
                       <td>${product.price}</td>
                       <td><button class="btn btn-success btn-lg" onClick={() => removeItem(product.id)}>
                            Delete
                        </button></td>
                     </tr> 
                   </tbody>
                 </table>
               </div>
             </form>
           </div>
           </div>
         </div>   
        ))}
    </div>
</div>
);
};


export default Cart;
