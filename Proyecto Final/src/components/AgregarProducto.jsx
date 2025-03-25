import React, {useState} from 'react'
import llamadosProducts from '../services/llamadosProducts';
import '../styles/AgregarProducto.css'

function AgregarProducto() {

    const [ProductoCreado,SetProductoCreada]=useState()
    const [PrecioProducto,SetPrecioProducto]=useState()
    const [StockProducto,SetStockProducto]=useState()
    const [ImageProducto,setImageProducto]=useState()

    function Producto(evento) {
    
      SetProductoCreada(evento.target.value)  
    }

    function Precio(evento) {
    
      SetPrecioProducto(evento.target.value)  
    }

    function Stock(evento) {
    
      SetStockProducto(evento.target.value)  
    }

    function Imagen(evento) {

      const imagen = evento.target.files[0]
      
      if (imagen) {

        const reader = new FileReader()
        reader.onloadend= () => {
          setImageProducto(reader.result)
        }  
          
        reader.readAsDataURL(imagen)

      }

      setImageProducto(evento.target.value)
       
      //*reader.readAsDataURL(evento.target.value)

    }

      function Agregar() {

        console.log(ImageProducto);
        
        
          llamadosProducts.PostProducts(ProductoCreado,PrecioProducto,StockProducto,ImageProducto)
     
      }
     
  return (
    
    <div className='cajota'>
        <div className='div'>
          <h1 className='KunKun'>Agregar Producto</h1>
          <label>Agregar Nombre Del Producto...</label><br />
          <input type="text"value={ProductoCreado} onChange={Producto}  placeholder='Agrega Un Nombre...'/><br /><br />
          <label>Agregar Precio...</label><br />
          <input type="text"value={PrecioProducto} onChange={Precio}  placeholder='Agrega Un Precio...'/><br /><br />
          <label>Agregar Stock...</label><br />
          <input type="text"value={StockProducto} onChange={Stock}  placeholder='Agrega El Stock...'/><br /><br />
          <label>Agregar Imagen</label><br />
          <input type="file" accept='image/*' onChange={Imagen}  placeholder='Agrega Una Imagen...' /><br /><br />

          <button onClick={Agregar} className='btnAg'>+</button>

        </div>

    </div>
  )
}

export default AgregarProducto