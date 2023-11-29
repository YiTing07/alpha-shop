import styles from './Cart.module.scss';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';

function CartItems ({ cartInfo, onClickPlus, onClickMinus }) {
  return (
    <>
      {cartInfo.map(item =>
      <div className={`${styles.productContainer} col col-12`} key={item.id}>
        <img
          className={styles.imgContainer}
          src={item.img} 
          alt={item.name}
        />
        <div className={styles.productInfo}>
          <div className={styles.productName}>{item.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <Minus
                className={styles.productAction}
                onClick={() => onClickMinus(item.id, item.quantity - 1)}
              />
              <span className={styles.productCount}>{item.quantity}</span>
              <Plus
                className={styles.productAction}
                onClick={() => onClickPlus(item.id, item.quantity + 1)}
              />
            </div>
          </div>
          <div className={styles.price}>{item.price}</div>
        </div>
      </div>
      )}
    </>
    
  );
}

export default function Cart({ cartInfo, onClickMinus, onClickPlus }) {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={`${styles.productList} col col-12`} data-total-price="0">
        <CartItems
          cartInfo={cartInfo}
          onClickMinus={(id, quantity) => onClickMinus?.(id, quantity)}
          onClickPlus={(id, quantity) => onClickPlus?.(id, quantity)}
        />
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