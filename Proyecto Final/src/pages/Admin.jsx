import React from 'react'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import AgregarProducto from '../components/AgregarProducto'
import ProductosAgregadosAdmin from '../components/ProductosAgregadosAdmin'

function Admin() {
  return (
    <div>
        <Navbar2/>
        <h1>Esta es la página de Administración</h1>
        <div>
          <AgregarProducto />
          <ProductosAgregadosAdmin />
        </div>
        <Footer />
    </div>
  )
}

export default Admin