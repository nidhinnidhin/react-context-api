import { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0)
  return <Cart.Provider value={{cart, setCart, count, setCount}}>{children}</Cart.Provider>;
};

export default Context;
