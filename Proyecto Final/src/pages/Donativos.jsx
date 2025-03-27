import React from 'react'
import Footer from '../components/Footer'
import '../styles/AcercaDe.css'
import PandaAcercaDe from '../img/PandaAcercaDe.png'
import Navbar2 from '../components/Navbar2'

function Donativos() {
  return (
    <div>
      <Navbar2 />
      <h1>Acerca De Nosostros</h1>
         <div className='cajon'>

           <div className='info'>

             <p>
             ¿A Quién Puedo Donar? <br /><br />
                Puedes donar una pequeña parte de tu compra en KOMPA SHOP a alguna de las causas béneficas que apoyamos, las cuales son: <br /><br />
                1.Fundación Paniamor: Se dedica a la defensa de los derechos de la niñez y la adolescencia en Costa Rica, trabajando para prevenir el abuso infantil y promover la protección integral de los niños y niñas. <br /><br />
                2.ALCCI: La Asociación Lucha Contra el Cáncer Infantil. Esta es una organización sin fines de lucro dedicada a apoyar a niños y adolescentes que padecen de cáncer, así como a sus familias. Su objetivo principal es proporcionar atención integral a los niños diagnosticados, ofreciendo apoyo emocional, psicológico y económico a las familias, así como contribuyendo a la financiación de tratamientos médicos y otros servicios relacionados con la lucha contra esta enfermedad. <br /><br />

             </p>
           </div>

           <img src={PandaAcercaDe} alt="p" />
           
         </div>
           
       <Footer />
    </div>

  )
}

export default Donativos
