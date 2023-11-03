import styles from './Step3.module.scss';

export default function Step3 () {
    return (
        <section className={`${styles.formContainer} col col-12`}>
            <form className="col col-12" data-phase="credit-card">
              <h3 className={styles.formTitle}>付款資訊</h3>
              <section className={`${styles.formBody} col col-12`}>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                    <div className={styles.inputLabel}>持卡人姓名</div>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                    <div className={styles.inputLabel}>卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" />
                  </div>
                </div>
                <div className={`${styles.col} col-12`}>
                  <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
                    <div className={styles.inputLabel}>有效期限</div>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
                    <div className={styles.inputLabel}>CVC / CCV</div>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
              </section>
            </form>
        </section>
    );
}