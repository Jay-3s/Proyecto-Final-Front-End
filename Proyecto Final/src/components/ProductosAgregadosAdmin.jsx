import React, { useState,useEffect } from 'react'
import llamadosProducts from '../services/llamadosProducts';
import '../styles/AgregarProducto.css'

function ProductosAgregadosAdmin() {

  const [Productos,setProductos] = useState([])
  const [ProductoEditado,setEditada] = useState("")

  useEffect(() => {
    async function fetchDataProducts() {
      const datos = await llamadosProducts.GetProducts()
      
      
      setProductos(datos)
    };
    fetchDataProducts();
  },[])

   
   function eliminar(id) {
  
   llamadosProducts.DeleteProducts(id)
   location.reload()
        
        
  }
  
  function DatoEditado (evento) {

    setEditada(evento.target.value.trim());

  }

  function editar(stock, precio, imgRef, id) {


    if (ProductoEditado != "") {

      llamadosProducts.UpdateProducts( ProductoEditado, stock, precio,imgRef, id);
      console.log("Producto actualizado con el nombre:", ProductoEditado);
      location.reload()

        // setEditada(""); 

    }  else {
      
      console.log("no se pudo editar producto");
      
    }
              
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

              <input type="text"  placeholder='Editar Una Tarea' onChange={DatoEditado} />
              <button onClick={e=>editar( product.stock, product.precio,product.imgRef, product.id)} >Editar</button>
              <button onClick={e=>eliminar(product.id)} >Eliminar</button>
              
            </li>
          ))}
        </ul>
       </div>
    </div>
  )
}

export default ProductosAgregadosAdmin