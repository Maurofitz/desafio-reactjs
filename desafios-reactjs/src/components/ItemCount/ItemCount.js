import React, { useState } from 'react'

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    return (
        <>
        <div class="d-grid gap-2 col-5 mx-auto">
            <button type="submit" class="btn btn-success btn-lg" name="submit" value="addtocard" onClick={() => handlerClickSubtrack()}>-</button>
            <h2>{count}</h2>
            <button type="submit" class="btn btn-success btn-lg" name="submit" value="addtocard" onClick={() => handlerClickAdd()}>+</button>
            <br />
            <button type="submit" class="btn btn-danger btn-lg" name="submit" value="addtocard" onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
        </div>
        </>
    );
}

export default ItemCount;