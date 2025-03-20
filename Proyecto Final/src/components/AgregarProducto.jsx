import React, {useState} from 'react'
import llamadosProducts from '../services/llamadosProducts';


function AgregarProducto() {

    const [ProductoCreado,SetProductoCreada]=useState()
    const [PrecioProducto,SetPrecioProducto]=useState()
    const [StockProducto,SetStockProducto]=useState()

    function Producto(evento) {
    
      SetProductoCreada(evento.target.value)  
    }

    function Precio(evento) {
    
      SetPrecioProducto(evento.target.value)  
    }

    function Stock(evento) {
    
      SetStockProducto(evento.target.value)  
    }

      function Agregar() {
       
           llamadosProducts.PostProducts(ProductoCreado,PrecioProducto,StockProducto)
           location.reload()
       
       }
     



  return (
    <div>
        <h1>Agregar Producto</h1>
        <label>Agregar Nombre Del Producto...</label><br />
        <input type="text"value={ProductoCreado} onChange={Producto}  placeholder='Agrega Una Tarea...'/><br /><br />
        <label>Agregar Precio...</label><br />
        <input type="text"value={PrecioProducto} onChange={Precio}  placeholder='Agrega Una Tarea...'/><br /><br />
        <label>Agregar Stock...</label><br />
        <input type="text"value={StockProducto} onChange={Stock}  placeholder='Agrega Una Tarea...'/><br /><br />
        <button onClick={Agregar} className='btnAg'>+</button>
    </div>
  )
}

export default AgregarProducto