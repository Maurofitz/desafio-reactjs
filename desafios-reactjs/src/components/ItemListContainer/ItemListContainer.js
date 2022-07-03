import ItemList from "../Itemlist/Itemlist";
import { getData } from '../API/Api'
import React, {useEffect, useState} from "react";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]= useState([])
    const [loading, setLoading]= useState(true)

    const categoryId = "men's clothing";

    useEffect(() => {
      setLoading(true);

      const URL = categoryId
          ? `https://fakestoreapi.com/products/category/${categoryId}`
          : 'https://fakestoreapi.com/products';

      fetch(URL)
          .then((res) => res.json())
          .then((json) => setProductList(json))
          .finally(() => {
              setLoading(false);
          });
        }, [categoryId]);

        
    /* const getProducts = async () => {
        try{
          const respuesta = await getData
          setProductList(respuesta)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
  
      useEffect(()=>{
        getProducts()
      },[]) */
    
    return (
      <div>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }     
      </div>
    )

}

export default ItemListContainer ;