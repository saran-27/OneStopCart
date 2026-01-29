import React from 'react'
import NavBar from '../../Navbar/Navbar';
import ProductsCard from '../../ProductsCard/ProductsCard';
import '../ProductsList/ProductsList.css';

function ProductsList() {
  return (
    <div>
      <NavBar></NavBar>
    <div className="heading">
        <h1>All products</h1>
    </div>
    <ProductsCard></ProductsCard>
    </div>
  )
}

export default ProductsList