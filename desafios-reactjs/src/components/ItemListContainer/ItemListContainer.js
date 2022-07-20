import ItemList from "../Itemlist/Itemlist";
import { getData } from '../API/Api'
import React, {useEffect, useState} from "react";
import {db} from "../../components/firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)
    const {categoryId} = useParams();

   /*  const categoryId = "men's clothing"; */

   useEffect(() => {
    setLoading(true);
    const productsCollection = collection (db , 'productos' );
    const q = query (productsCollection, where( 'productos' , '==' , 'hombre' ))
  
    getDocs (q)
    .then(result => {
      const lista = result.docs.maps(product => {
        return {
          id: product.id,
          ...product.data(),
        }
      })
        setProducts(lista);
    })
    .finally(() => setLoading(false));
  }, [categoryId])
    

return (
      <>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList products={products}/> }     
      </>
    )
}

export default ItemListContainer ;