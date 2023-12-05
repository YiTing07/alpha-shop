import styles from './Main.module.scss';

import Form from './Form/Form';
import Cart from './Cart/Cart';
import { CartContextProvider } from '../../contexts/CartContext';


export default function Main () {

  return (
    <CartContextProvider>
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <Form />
          <Cart />
        </div>
      </main>
    </CartContextProvider>
    
  );
}