import styles from './Main.module.scss';
import productData from './Cart/productData';

import Form from './Form/Form';
import Cart from './Cart/Cart';
import { useState } from 'react';


export default function Main () {
  const [cartInfo, setCartInfo] = useState(productData);

  const handleClickPlus = ((id) => {
    setCartInfo((prevCartInfo) => {
      return prevCartInfo.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(product.quantity + 1, 1)
          const newPrice = product.price / product.quantity * newQuantity
          return {
            ...product,
            quantity: newQuantity,
            price: newPrice,
          };
        }
        return product
      })
    })
  });

  const handleClickMinus = ((id) => {
    setCartInfo((prevCartInfo) => {
      return prevCartInfo.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(product.quantity - 1, 1)
          const newPrice = product.price / product.quantity * newQuantity
          return {
            ...product,
            quantity: newQuantity,
            price: newPrice,
          };  
        }
        return product
      })
    })
  });

  const totalPrice = cartInfo.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0);

  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Form></Form>
        <Cart
          cartInfo={cartInfo}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
          totalPrice={totalPrice}
        />
      </div>
    </main>
  );
}