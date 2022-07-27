import React, { useContext, Component} from 'react'
import { cartContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { db } from "../../components/firebase/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Cart = () => {
  
  const {products , removeItem , calcularTotal, product } = useContext (cartContext);

  if (products.length === 0) {
    return (
      <>
      <h4>Aún no has agregado ningún producto al carrito</h4>
            <Link to={'/'}>
              <button class=" d-flex mb-0 d-block btn btn-success py-2 mr-1">Ir al catalogo</button>
            </Link>
      </>
    )
  }
  const datosComprador = {
    constructor() {
        this.state = {
            nombre: " ",
            telefono: " ",
            email: " "
           }
    }
  
}

const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas")
    addDoc(ventasCollection, {
        datosComprador,
        items: products.map(product => ({ nombre: product.name, precio: product.price, id: product.id })),
        total: calcularTotal(),
        fecha: serverTimestamp(),
    })
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
             <section className="d-flex flex-row justify-content-end mb-5">
              <h4>Total ${calcularTotal()}.-</h4>
              <button type="submit" class="btn btn-success btn-lg"> onClick={() => removeItem(product.id)}
                Limpiar carrito
              </button> 
          </section>
          <div>
                <form>
                    <input type="text"
                           value={this.state.nombre} 
                           placeholder="Nombre"/>

                    <input type="text"  value={this.state.telefono} placeholder="Telefono"/>
                    <input type="email" value={this.state.email}  placeholder="Email"/>
                    <button onClick={finalizarCompra} class="btn btn-success btn-lg" >Finalizar Compra </button>
                </form>
            </div>
           </div>
           </div>
         </div>   
        ))}
    </div>
</div>
);

};


export default Cart;
