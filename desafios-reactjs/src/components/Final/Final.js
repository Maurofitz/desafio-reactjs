import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { cartContext } from "../Context/Context";
import {db} from "../../components/firebase/firebase"

const Final = () => {
    const [comprador, setComprador]= useState({})
    const [ordenId, setOrdenId]= useState('')
    const { products,  calcularTotal, clear } = useContext(cartContext)

     const datosComprador = (e)=> {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
     } 
     const finalizarCompra = (e) => {
        e.preventDefault()
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            comprador,
            items: products.map(product => ({ nombre: product.title, precio: product.price, id: product.id })),
            total: calcularTotal(),
            fecha: serverTimestamp(),
        })
        .then((res) =>{
            setOrdenId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
    }
  return (
    <div>
                {!ordenId
                ? <> <h2 className='h2Checkout'>Complete el formulario para terminar su compra</h2>
                <form  className="divCheckout" onSubmit={finalizarCompra}>
                    <input  className='inputCheckout' type="text"  placeholder="Nombre" name='nombre' onChange={datosComprador}/>
                    <input  className='inputCheckout' type="text"   placeholder="Direccion" name='direccion' onChange={datosComprador} />
                    <input  className='inputCheckout' type="text"   placeholder="Telefono" name='telefono' onChange={datosComprador} />
                    <input  className='inputCheckout' type="email"   placeholder="Email" name='email' onChange={datosComprador}/>
                    <button type='submit' className="buttonCarrito" >Finalizar Compra </button>
                </form>
                </>
                :<div>
                    <h2>Muchas gracias por su compra</h2>
                    <p>Su orden es: {ordenId}</p>
                    <Link to="/cart">
                        <button type="submit" class="btn btn-success btn-lg">Finalizar compra</button>
                    </Link>
                </div>
                }
    </div>
    
  )
}

export default Final