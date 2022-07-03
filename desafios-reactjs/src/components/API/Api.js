import producto1 from "../../Assets/producto1.jpg"
import producto2 from "../../Assets/producto2.jpg"
import producto3 from "../../Assets/producto3.jpg"
import producto4 from "../../Assets/producto4.jpg"
import producto5 from "../../Assets/producto5.jpg"
import producto6 from "../../Assets/producto6.jpg"

const products = [
    {id:'01', name:'Remera Basica',  image: producto1, stock:10},
    {id:'02', name:'Camisa blanca',  image:producto2, stock:8},
    {id:'03', name:'Camisa',  image:producto3, stock:7},
    {id:'04', name:'Tapado',  image:producto4, stock:50},
    {id:'05', name:'Camisa jean',  image:producto5, stock:2},
    {id:'06', name:'Blazer',  image:producto6, stock:79},
  ]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },1000)
  })
