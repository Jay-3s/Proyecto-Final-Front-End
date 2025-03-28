import React, { useState,useEffect } from 'react'
import llamadosProducts from '../services/llamadosProducts';
import '../styles/ProductCard.css'



function ProductosAgregadosClient() {

  const [ Productos,setProductos] = useState([])
 

  useEffect(() => {
    async function fetchDataProducts() {
      const datos = await llamadosProducts.GetProducts()
      
      
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
             
             <div className='itemCard2'>
               <img src={product.imgRef} alt="1" />
               <div> <p>Nombre:{product.nombre}</p></div>
               <div><p>Precio:¢{product.precio}</p></div>
               <div><p>Disponibles:{product.stock}</p></div>

               <div className='btnCarrito'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                  </button>

                </div>
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