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
                
                He creado KOMPA SHOP con la idea de poder darle vida a una marca que no solo se esmere en conseguir vender la imagen de un producto de manera llamativa sino también, <br />

                busca ayudar al medio ambiente a través de la venta de camisas con diseños increíbles y ofrecer un pequeño porcentaje de la compra a una causa bénefica de la preferencia del cliente. <br /><br />

                La razón por la que he creado KOMPA SHOP es porque he notado la alta desigualdad ecomómica del país y los daños ambientales causados por las prendas de mala calidad que provocan un uso desmedido de materiales como el algodón que ha llevando también a la contaminación, <br />

                KOMPA busca crear conciencia y compartir de manera solidaria lo que puede crear, el punto de la existencia de KOMPA SHOP es mostrar que podemos llevar con nosotros calidad y estilo sin dañar el medio ambiente y beneficiando a aquellos menos afortunados <br /><br />

                Más allá de eso también puedo contarte que el nombre de la marca es KOMPA SHOP como tal debido a que el kompa es un género musical haitiano que fusiona influencias africanas, europeas y caribeñas lo que para mí conectó con el personaje de un panda muy alegre que traería esas vibras tan de verano que tiene Puntarenas <br /><br />

                Realmente este aplicativo puede ser de gran utilidad para empresas que quieren ofrcer un método de ventas más sostenible y limpio lo que vuelve a KOMPA en la mejor opción en los catalogos de ventas en internet ya que fusiona todo aquello por lo que vale la pena invertir tiempo y esfuerzo. <br /><br />

                ¡Gracias por estar aquí!
              </p>

            </div>

            <div className='Joz'>
            <img src={Jostin} alt="p" className='js'/>
            </div>
           
        </div>
           
       <Footer />

    </div>

  )
}

export default Desarrollador