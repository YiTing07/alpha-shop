import styles from './Main.module.scss';

import Form from './Form/Form';
import Cart from './Cart/Cart';


export default function Main () {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Form></Form>
        <Cart></Cart>
      </div>
    </main>
  );
}