import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import './ProductsCard.css'
import { addToCart } from '../../Api/CartApi';
import {ImageData} from '../../Products';

function ProductsCard({category}){

  const[products,setProducts]=useState([]);
  const navigate=useNavigate()

  useEffect(()=>{
    let url="https://ecommerce-backend-api-r5hw.onrender.com/api/products/"

    if(category){
      url += `?category=${category}`;
    }
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch((err)=>console.log(err));
  },[category]);

  return (
    <div className='card'>
        {products.map((product)=>(
        <div className="products-card" key={product.id}
        onClick={()=>navigate(`/product/${product.id}`)}
        >
            <img src={ImageData[product.image_key]} alt={product.name}></img>
            <div className="product-card-info">
            <h2>{product.name}</h2>
            <p>
  {product.description.length > 100
    ? product.description.slice(0, 50) + "..."
    : product.description}</p>
            <p><span><b>{product.price}</b></span></p>
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
        ))}
    </div>
  )
}

export default ProductsCard