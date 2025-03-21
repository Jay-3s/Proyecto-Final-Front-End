import React, { useState,useEffect } from 'react'
import llamadosProducts from '../services/llamadosProducts';


function ProductosAgregadosAdmin() {

  const [ Productos,setProductos] = useState([])
  const [ProductoEditado,setEditada] = useState()

  useEffect(() => {
    async function fetchDataProducts() {
      const datos = await llamadosProducts.GetProducts()
      console.log(datos);
      
      setProductos(datos)
    };
    fetchDataProducts();
  },[])

   
   function eliminar(id) {
  
   llamadosProducts.DeleteProducts(id)
   location.reload()
        
        
  }

  function editar(id) {

    llamadosProducts.UpdateProducts(ProductoEditado,id)
    location.reload()
             
  }

  function DatoEditado (Evento) {

    setEditada(Evento.target.value)

    
  }

  return (
    <div className='divdiv'>
       <div>
        <ul>
          {Productos.map((product,index) => (

            <li key={index}>
              <input type="checkbox" />
              <p>{product.nombre}</p>
              <img src={product.imgRef} />
              <input type="text"  placeholder='Editar Una Tarea' onChange={DatoEditado} />
              <button onClick={e=>editar(product.id)} >Editar</button>
              <button onClick={e=>eliminar(product.id)} >Eliminar</button>
              
            </li>
          ))}
        </ul>
       </div>
    </div>
  )
}

export default ProductosAgregadosAdmin