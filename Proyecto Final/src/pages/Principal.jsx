import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Principal() {
  return (
    <div>
        <Navbar2 />
        <Sidebar />
        <ProductCard />
        <ProductList />
        <Footer />
    </div>
  )
}

export default Principal