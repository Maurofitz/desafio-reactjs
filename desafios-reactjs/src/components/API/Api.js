import producto1 from "../../Assets/product-01.jpg"
import producto2 from "../../Assets/product-02.jpg"
import producto3 from "../../Assets/product-03.jpg"
import producto4 from "../../Assets/product-04.jpg"
import producto5 from "../../Assets/product-05.jpg"
import producto6 from "../../Assets/product-07.jpg"

const products = [
    {id:'01', name:'random2',  img:{producto1}, stock:10},
    {id:'02', name:'random3',  img:{producto2}, stock:8},
    {id:'03', name:'random4',  img:{producto3}, stock:7},
    {id:'04', name:'random5',  img:{producto4}, stock:50},
    {id:'05', name:'random1',  img:{producto5}, stock:2},
    {id:'06', name:'random6',  img:{producto6}, stock:79},
  ]

  export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },3000)
  })