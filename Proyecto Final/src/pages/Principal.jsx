import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer'
import "../styles/Principal.css"
import ProductosAgregadosClient from '../components/ProductosAgregadosClient'

function Principal() {
  return (  
    <div>
        <Navbar2 />
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