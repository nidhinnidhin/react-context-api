import React, { useContext } from "react";
import { Cart } from "../Context";

function SingleProduct({ prod }) {

  const {cart, setCart} = useContext(Cart)

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div style={{ fontWeight: 700 }} className="productDesc">
        <span>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
