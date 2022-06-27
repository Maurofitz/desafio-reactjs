import React from "react";
import ItemList from "../Itemlist/Itemlist";
import { getData } from '../API/Api'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]= useState([])
    const [loading, setLoading]= useState(true)

    const getProducts = async () => {
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
      },[])
    
    return (
      <div>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }     
      </div>
    )

}

export default ItemListContainer ;