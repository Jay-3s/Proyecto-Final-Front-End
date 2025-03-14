import React from 'react'
import '../styles/Main.css'
import panda from '../img/panda.jpg'

function Card() {
  return (
    <div>
         <div id='caja'>
            <div id='cajita'>
                <img src={panda} alt="" id='img'/>

            </div>
            
         </div>
    </div>
  )
}

export default Card
