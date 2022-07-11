import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

     useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=> setProduct(data))          
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    }, [productId]);
return (
    <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetails product={product} />
                </>
            )}
        </div>
);

};
export default ItemDetailContainer;