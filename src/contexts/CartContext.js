import { createContext, useState } from "react";
import productData from "../components/Main/Cart/productData";

export const CartContext = createContext();

export function CartContextProvider ({children}) {
  const [cart, setCart] = useState(productData);

  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0);

  return (
    <CartContext.Provider value={{cart, setCart, totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}