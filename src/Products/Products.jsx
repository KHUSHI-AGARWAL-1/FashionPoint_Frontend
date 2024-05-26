import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Product from '../Components/Product'
function Products() {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen "><Product/></div>
    
    <Footer/>
    </>
  )
}

export default Products