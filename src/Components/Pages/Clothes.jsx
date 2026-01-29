import React from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'
import Navbar from '../Navbar/Navbar'

function Clothes() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductsCard category="fashion"></ProductsCard></div>
  )
}

export default Clothes