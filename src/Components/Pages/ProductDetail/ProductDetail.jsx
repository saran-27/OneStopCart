import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './ProductDetail.css';
import Navbar from '../../Navbar/Navbar'
import { addQuantity, removeQuantity } from "../../../Api/CartQuantityApi";
import { addToCart } from '../../../Api/CartApi';
import {ImageData} from '../../../Products';


function ProductDetail() {

    const {id} =useParams();
    const[product,setProduct]=useState([]);

   useEffect(() => {
  fetch(`https://ecommerce-backend-api-r5hw.onrender.com/api/products/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log("PRODUCT API RESPONSE:", data);
      console.log("IMAGE FIELD:", data.image);
      setProduct(data);
    })
    .catch((err) => console.log(err));
}, [id]);


  return (
    <div>
        <Navbar></Navbar>
        <div className='detail'>
        <div className="product-img">
            <img src={ImageData[product.image_key]} alt=''></img>
        </div>
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h4><del>$100</del> <ins>${product.price}</ins></h4>
                     <button
              onClick={async (e) => {
                e.stopPropagation();
                const res = await addToCart(product.id);
                alert(res.message); // or toast
              }}
            >
              Add to Cart
            </button>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail