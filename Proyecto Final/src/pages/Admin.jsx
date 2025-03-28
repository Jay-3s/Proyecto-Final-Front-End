import React from 'react'
import Footer from '../components/Footer'
import AgregarProducto from '../components/AgregarProducto'
import ProductosAgregadosAdmin from '../components/ProductosAgregadosAdmin'
import NavbarAdmin from '../components/NavbarAdmin'

function Admin() {
  return (
    <div>
        <NavbarAdmin/>
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