import { useContext } from 'react';
import { FormContext } from '../../../contexts/FormContext';
import styles from './Step3.module.scss';

export default function Step3 () {
  const {cardData, setCardData} = useContext(FormContext);

    return (
        <section className={`${styles.formContainer} col col-12`}>
            <form className="col col-12" data-phase="credit-card">
              <h3 className={styles.formTitle}>付款資訊</h3>
              <section className={`${styles.formBody} col col-12`}>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                    <div className={styles.inputLabel}>持卡人姓名</div>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      onChange={(e) => {setCardData({...cardData, cardUserName: e.target.value})}} 
                    />
                  </div>
                </div>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                    <div className={styles.inputLabel}>卡號</div>
                    <input 
                      type="text" 
                      placeholder="1111 2222 3333 4444"
                      onChange={(e) => {setCardData({...cardData, cardNum: e.target.value})}} 
                    />
                  </div>
                </div>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
                    <div className={styles.inputLabel}>有效期限</div>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      onChange={(e) => {setCardData({...cardData, cardExpiryDate: e.target.value})}} 
                    />
                  </div>
                  <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
                    <div className={styles.inputLabel}>CVC / CCV</div>
                    <input 
                      type="text" 
                      placeholder="123" 
                      onChange={(e) => {setCardData({...cardData, cardCCV: e.target.value})}} 
                    />
                  </div>
                </div>
              </section>
            </form>
        </section>
    );
}