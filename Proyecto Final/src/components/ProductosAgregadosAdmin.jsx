import React, { useState,useEffect } from 'react'
import llamadosProducts from '../services/llamadosProducts';
import '../styles/AgregarProducto.css'

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
  function DatoEditado (evento) {

    setEditada(evento.target.value)

    
  }
  
  function editar(id) {

    llamadosProducts.UpdateProducts(ProductoEditado,id)
    
             
  }


  return (
    <div className='divdiv'>
       <div>
        <ul className='ul'>
          {Productos.map((product,index) => (

            <li key={index}>
              <p>{product.nombre}</p>
              <div className='foto'>
              <img src={product.imgRef} />
                
              </div>
              <input type="text"  placeholder='Editar Una Tarea' onChange={DatoEditado} value={ProductoEditado}/>
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