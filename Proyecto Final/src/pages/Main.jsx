import React from 'react'
import '../styles/Main.css'
import ProductosAgregadosClient from '../components/ProductosAgregadosClient'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

function Main() {
  return (
    <div>

      <Navbar2 />
      <h1 className='es'>Te Damos La Bienvenida A KOMPA SHOP Costa Rica</h1>
      <ProductosAgregadosClient />
      <Footer />

    </div>
  )
}

export default Main