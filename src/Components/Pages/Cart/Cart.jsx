import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "../Cart/Cart.css";
import {ImageData} from '../../../Products';

import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";

import { addQuantity, removeQuantity } from "../../../Api/CartQuantityApi";
import { CheckOutApi } from "../../../Api/CheckoutApi";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [message, setMessage] = useState("");

  /* ================= TOTAL ================= */
  const totalAmount = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* ================= FETCH CART ================= */
  useEffect(() => {
    const cartId = localStorage.getItem("cart_id");
    if (!cartId) return;

    fetch(`https://ecommerce-backend-api-r5hw.onrender.com/api/cart/${cartId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("CART API RESPONSE 👉", data);
        setCartData(data.items || []);
      })
      .catch((err) => console.error(err));
  }, []);

  /* ================= REMOVE ITEM ================= */
  const removeFromCart = async (productId) => {
    const cartId = localStorage.getItem("cart_id");

    await fetch("https://ecommerce-backend-api-r5hw.onrender.com/api/cart/remove/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart_id: cartId,
        product_id: productId,
      }),
    });

    // update UI
    setCartData((prev) =>
      prev.filter((item) => item.product !== productId)
    );
  };

  /* ================= INCREASE ================= */
  const handleIncrease = async (productId) => {
    const cartId = localStorage.getItem("cart_id");

    await addQuantity(cartId, productId);

    setCartData((prev) =>
      prev.map((item) =>
        item.product === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* ================= DECREASE ================= */
  const handleDecrease = async (productId) => {
    const cartId = localStorage.getItem("cart_id");

    await removeQuantity(cartId, productId);

    setCartData((prev) =>
      prev
        .map((item) =>
          item.product === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* ================= CHECKOUT ================= */
  const handleCheckout = async () => {
    const cartId = localStorage.getItem("cart_id");
    const res = await CheckOutApi(cartId);

    alert(res.message);

    if (res.Order_id) {
      setCartData([]);
      localStorage.removeItem("cart_id");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="title">
        <h1>My Cart</h1>
        {message && <p className="cart-message">{message}</p>}
      </div>

      {/* EMPTY CART */}
      {cartData.length === 0 && (
        <p style={{ textAlign: "center" }}>Your cart is empty</p>
      )}

      {/* CART ITEMS */}
      {cartData.map((item) => (
        <div className="Cart-page" key={item.id}>
          <div className="cart-img">
            <img
              src={ImageData[item.image_key]}
              alt={item.product_name}
            />
          </div>

          <div className="cart-detail">
            <h3>{item.product_name}</h3>
            <p>Price: ₹{item.price}</p>

            <div className="qty-control">
              <img
                src={minus}
                alt="minus"
                onClick={() => handleDecrease(item.product)}
              />
              <span>{item.quantity}</span>
              <img
                src={plus}
                alt="plus"
                onClick={() => handleIncrease(item.product)}
              />
            </div>
            <button onClick={() => removeFromCart(item.product)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      {cartData.length > 0 && (
        <div className="total">
          <div className="total-head">
            <h2>Total Amount:</h2>
          </div>
          <div className="total-amt">
            <h5>₹{totalAmount}</h5>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
