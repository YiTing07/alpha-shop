import styles from './Cart.module.scss';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';

function Product() {
  return (
    <>
      {products.map(item =>
      <div className={`${styles.productContainer} col col-12`}>
        <img
        key={item.id} 
        className={styles.imgContainer}
        src={item.img} 
        alt={item.name}/>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{item.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <Minus className={styles.productAction}></Minus>
              <span className={styles.productCount}>{item.quantity}</span>
              <Plus className={styles.productAction}></Plus>
            </div>
          </div>
          <div className={styles.price}>{item.price}</div>
        </div>
      </div>
      )}
    </>
    
  );
}

export default function Cart() {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={`${styles.productList} col col-12`} data-total-price="0">
        <Product></Product>
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}></div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}></div>
      </section>
    </section>
  );
}