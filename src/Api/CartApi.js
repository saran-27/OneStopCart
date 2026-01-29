 export const addToCart = async (productId) => {
  const res = await fetch("https://ecommerce-backend-api-r5hw.onrender.com/api/cart/add/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      product_id: productId,
      cart_id: localStorage.getItem("cart_id"), // may be null first time
    }),
  });

  const data = await res.json();

  // 🔥 THIS IS THE MOST IMPORTANT LINE
  if (data.cart_id) {
    localStorage.setItem("cart_id", data.cart_id);
  }
   return data;
};
