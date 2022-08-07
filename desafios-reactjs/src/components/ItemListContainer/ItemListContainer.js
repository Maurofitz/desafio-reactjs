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
    const q = categoryId
        ? query(collection(db, 'productos'), where('category', '==', categoryId))
        : collection(db, 'productos');
        
    getDocs(q)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(lista);
    })
    .finally(() => setLoading(false));
  }, [categoryId])
    

return (
      <>
        <h1>{greeting}</h1>
        {loading ? <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> : <ItemList products={products}/> }     
      </>
    )
}

export default ItemListContainer ;