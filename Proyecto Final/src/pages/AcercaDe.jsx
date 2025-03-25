import React from 'react'
import Footer from '../components/Footer'
import '../styles/AcercaDe.css'
import PandaAcercaDe from '../img/PandaAcercaDe.png'

function AcercaDe() {
  return (
    <div>
      <h1>Acerca De Nosostros</h1>
         <div className='cajon'>

           <div className='info'>
            
            <p>KOMPA SHOP – Moda Sostenible con Impacto Social <br /><br />

En KOMPA SHOP, creemos que la moda puede ser un motor de cambio positivo para el planeta y la sociedad. <br /><br /> Por eso, hemos creado una línea exclusiva de camisetas ecológicas elaboradas con fibra de bambú, un material sostenible, suave y resistente que reduce el impacto ambiental sin comprometer la calidad ni el estilo. <br /><br />

Sostenibilidad y Confort en Cada Prenda <br /><br />

Nuestras camisetas están diseñadas pensando en el bienestar del planeta y de quienes las usan. La fibra de bambú es una alternativa ecológica a los textiles tradicionales, ya que: <br /><br />

✔ Es biodegradable y se descompone sin generar residuos contaminantes. <br /><br />
✔ Requiere menos agua y no necesita pesticidas para su cultivo. <br /><br />
✔ Es hipoalergénica y antibacteriana, ideal para pieles sensibles. <br /><br />
✔ Regula la temperatura y absorbe la humedad, garantizando frescura y comodidad. <br /><br />

Compra con Propósito: Tú Eliges a Quién Ayudar <br /><br />

En KOMPA SHOP, no solo promovemos la moda responsable, sino que también apostamos por un impacto positivo en nuestra comunidad. Por cada compra, ofrecemos la opción de donar un porcentaje del monto a una ONG o causa benéfica nacional de tu preferencia. Así, juntos construimos un mundo más justo y solidario. <br /><br />

Compra Local, Apoya el Cambio <br /><br />

Estamos comprometidos con Costa Rica y con una producción ética que respalde el comercio justo. Al elegir KOMPA SHOP, apoyas una iniciativa que respeta el medioambiente y contribuye al desarrollo social del país. <br /><br />

Únete al Movimiento KOMPA <br /><br />

Luce con orgullo una camiseta que representa tus valores. Sostenibilidad, calidad y solidaridad se unen en cada prenda de KOMPA SHOP. <br /><br />

Compra con propósito. Visítanos y haz la diferencia. <br /><br />
            </p>
           </div>

           <img src={PandaAcercaDe} alt="p" />
           
         </div>
           
       <Footer />
    </div>

  )
}

export default AcercaDe