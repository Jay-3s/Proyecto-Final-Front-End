import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import "../styles/Principal.css"
import ProductosAgregadosClient from '../components/ProductosAgregadosClient'
import NavbarAdmin from '../components/NavbarAdmin'

function Principal() {
  return (  
    <div>

      <NavbarAdmin />

      <main className='main'>

        <Sidebar />
        <ProductosAgregadosClient />

      </main>

      {/* <ProductList /> */}
      <Footer />

    </div>
  )
}

export default Principal