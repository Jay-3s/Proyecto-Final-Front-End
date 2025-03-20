import React, { useState,useEffect } from 'react'
import llamadosProducts from '../services/llamadosProducts';
import '../styles/ProductCard.css'
import panda2 from'../img/panda2.jpg'


function ProductosAgregadosClient() {

  const [ Productos,setProductos] = useState([])
 

  useEffect(() => {
    async function fetchDataProducts() {
      const datos = await llamadosProducts.GetProducts()
      console.log(datos);
      
      setProductos(datos)
    };
    fetchDataProducts();
  },[])


  return (
    <div className='divdiv'>
       <div>
        <ul className='container'>
          {Productos.map((product,index) => (

            <li key={index}>

            <div className="ContCard">
             
             <div className='itemCard'>
             <img src={panda2} alt="1" />
               <div> <p>{product.nombre}</p></div>
               <div><p>{product.precio}</p></div>
               <div><p>{product.stock}</p></div>
             </div>
       
            
           </div>
              
              
              
            </li>
          ))}
        </ul>

       </div>

        
    </div>
  )
}

export default ProductosAgregadosClient