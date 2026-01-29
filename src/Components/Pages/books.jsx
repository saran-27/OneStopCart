import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductsCard from '../ProductsCard/ProductsCard'
function books() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductsCard category="books"></ProductsCard>
    </div>
  )
}

export default books