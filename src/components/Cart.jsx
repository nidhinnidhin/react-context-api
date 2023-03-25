import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";
import "./Styles.css";

function CartPage() {
  const { cart, setCart } = useContext(Cart);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id}/>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
