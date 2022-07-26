import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import {db} from "../../components/firebase/firebase"
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
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