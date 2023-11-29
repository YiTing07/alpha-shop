import styles from './Main.module.scss';

import Form from './Form/Form';
import Cart from './Cart/Cart';
import { useState } from 'react';


export default function Main () {
  const [cartinfo, setCartInfo] = useState('');

  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Form></Form>
        <Cart></Cart>
      </div>
    </main>
  );
}