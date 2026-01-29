export const CheckOutApi=async(CartId)=>{
    const res =await fetch (`https://ecommerce-backend-api-r5hw.onrender.com/api/cart/checkout/`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
            cart_id:CartId,
        }),

});
return await res.json();
}