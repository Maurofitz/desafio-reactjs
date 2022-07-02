import React, { useState } from "react";

const Itemcount = ({stock}) => { 
const [amout, setAmout] = useState (0)
const count = (value) => {
    const result = amout + value
    if (result<=stock) {
    setAmout(amout+value)
    }
}
return (
<div class="col-auto">
    <ul class="list-inline pb-3">
        <li class="list-inline-item text-right">
        Agregar
        <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
        </li>
        <li onClick={()=>count(-1)} class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
        <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">{amout} {stock} </span></li>
        <li onClick={()=>count(+1)} class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
    </ul>
</div>
)};

export default Itemcount;