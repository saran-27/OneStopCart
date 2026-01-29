import React from 'react'
import Home from '../src/Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import ProductsList from './Components/Pages/ProductsList/ProductsList'
import Books from './Components/Pages/books';
import Clothes from './Components/Pages/Clothes';
import Electronic from './Components/Pages/Electronic';
import {Routes,Route} from 'react-router-dom';
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail';
function Ecommerce() {
  return (
    <div>
     <Routes>
    <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<ProductsList></ProductsList>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/books" element={<Books />}></Route>
         <Route path="/clothes" element={<Clothes></Clothes>}></Route>
          <Route path="/electronic" element={<Electronic></Electronic>}></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>

     </Routes>
    </div>
  )
}

export default Ecommerce;