import React from 'react'
import Footer from '../components/Footer'
import '../styles/Donativos.css'
import paniamor from '../img/paniamor.png'
import alcci from '../img/ALCCI.png'
import Teletón from '../img/Teletón Costa Rica.png'
import cj from '../img/Creciendo Juntos.png'
import Navbar2 from '../components/Navbar2'

function Donativos() {
  return (
    <div>

      <Navbar2 />

        <h1>¿A Quién Puedo Donar?</h1>

          <div className='cajono'>

            <div className='infor'>

             <p>
             
                Puedes donar una pequeña parte de tu compra en KOMPA SHOP a alguna de las causas béneficas que apoyamos, las cuales son: <br /><br />
                1.Fundación Paniamor: Se dedica a la defensa de los derechos de la niñez y la adolescencia en Costa Rica, trabajando para prevenir el abuso infantil y promover la protección integral de los niños y niñas. <br /><br />
                2.ALCCI: La Asociación Lucha Contra el Cáncer Infantil. Esta es una organización sin fines de lucro dedicada a apoyar a niños y adolescentes que padecen de cáncer, así como a sus familias. Su objetivo principal es proporcionar atención integral a los niños diagnosticados, ofreciendo apoyo emocional, psicológico y económico a las familias, así como contribuyendo a la financiación de tratamientos médicos y otros servicios relacionados con la lucha contra esta enfermedad. <br /><br />
                3.Teletón Costa Rica: Es un evento benéfico anual organizado por el Club Activo 20-30 Internacional de San José. Desde su inicio en 1984, el Teletón ha recaudado fondos para equipar y mejorar las instalaciones del Hospital Nacional de Niños y, más recientemente, ha extendido su apoyo a otros centros médicos y a la población adulta mayor. <br /><br />
                4.​Fundación Creciendo Juntos: Es una organización sin fines de lucro establecida en 2001 en Guanacaste, Costa Rica. Su misión es mejorar el acceso a la educación de calidad, la salud y la capacitación en 19 comunidades que rodean la Península Papagayo. A lo largo de más de dos décadas, ha trabajado en colaboración con escuelas primarias y secundarias locales, beneficiando a miles de niños, adolescentes, adultos y personas mayores. Estas iniciativas buscan ampliar las oportunidades laborales, fomentar el autoempleo y promover el emprendimiento en la región. <br />

             </p>

            </div>

            <div className='photos2'>

              <img src={paniamor} alt="p" />
              <img src={alcci} alt="p" />
              <img src={Teletón} alt="p" />
              <img src={cj} alt="p" />

            </div>

           
         </div>
           
       <Footer />
    </div>

  )
}

export default Donativos
