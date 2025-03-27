import React from 'react'
import Footer from '../components/Footer'
import '../styles/AcercaDe.css'
import Jostin from '../img/Jostin.jpg'
import Navbar2 from '../components/Navbar2'

function Desarrollador() {
  return (
    <div>
      <Navbar2 />
      <h1>Desarrollador</h1>
         <div className='cajon'>

           <div className='info'>
            
            <p className='p'> ¡Hola! <br /><br />

                Un Saludo <br /><br />

                Me presento mi Nombre es Jostin Gabriel Espinoza Sánchez y soy el creador y desarrollador de KOMPA SHOP. <br /><br />
                
                He creado KOMPA SHOP con la idea de poder darle viada a una marca que no solo se esmere en conseguir vender la imagen de un producto de manera llamativa sino también, <br />

                busca ayudar al medio ambiente a través de la venta de camisas con diseños increíbles y ofrecer un pequeño porcentaje de la compra a una causa bénefica de la preferencia del cliente




            </p>

           </div>

           <img src={Jostin} alt="p" className='Joz'/>
           
         </div>
           
       <Footer />
    </div>

  )
}

export default Desarrollador