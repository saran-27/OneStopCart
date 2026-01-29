export const addQuantity = async (cartId, productId) => {
  const res = await fetch("https://ecommerce-backend-api-r5hw.onrender.com/api/cart/add/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart_id: cartId,
      product_id: productId,
    }),
  });

  return await res.json();
};

export const removeQuantity = async (cartId, productId) => {
  const res = await fetch("https://ecommerce-backend-api-r5hw.onrender.com/api/cart/remove/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart_id: cartId,
      product_id: productId,
    }),
  });

  return await res.json();
};
