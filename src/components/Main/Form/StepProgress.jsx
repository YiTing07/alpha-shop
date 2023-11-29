import styles from './StepProgress.module.scss'
import { ReactComponent as Complete } from '../../../assets/icons/pg-complete.svg'

function AddressPg () {
  return(
    <>
      <span className={styles.progressGroup} data-phase="address">
        <span className={styles.progressIconCurrent}>
          <span className={styles.textCurrent}>1</span>
        </span>
        <span className={styles.progressLabelCurrent}>寄送地址</span>
      </span>
      <span className={styles.progressBar} data-order="1"></span>

      <span className={styles.progressGroup} data-phase="shipping">
        <span className={styles.progressIconUndone}>
          <span className={styles.textUndone}>2</span>
        </span>
        <span className={styles.progressLabelUndone}>運送方式</span>
      </span>
      <span className={`${styles.progressBar} ${styles.undone}`} data-order="2"></span>

      <span className={styles.progressGroup} data-phase="credit-card">
        <span className={styles.progressIconUndone}>
          <span className={styles.textUndone}>3</span>
        </span>
        <span className={styles.progressLabelUndone}>付款資訊</span>
      </span>
    </>
  )
}

function ShippingPg () {
  return(
    <>
      <span className={styles.progressGroup} data-phase="address">
        <Complete className={styles.completeIcon}/>
        <span className={styles.progressLabelCurrent}>寄送地址</span>
      </span>
      <span className={styles.progressBar} data-order="1"></span>

      <span className={styles.progressGroup} data-phase="shipping">
        <span className={styles.progressIconCurrent}>
          <span className={styles.textCurrent}>2</span>
        </span>
        <span className={styles.progressLabelCurrent}>運送方式</span>
      </span>
      <span className={styles.progressBar} data-order="2"></span>

      <span className={styles.progressGroup} data-phase="credit-card">
        <span className={styles.progressIconUndone}>
          <span className={styles.textUndone}>3</span>
        </span>
        <span className={styles.progressLabelUndone}>付款資訊</span>
      </span>
    </>
  )
}

function CreditCardPg () {
  return(
    <>
      <span className={styles.progressGroup} data-phase="address">
        <Complete className={styles.completeIcon} />
        <span className={styles.progressLabelCurrent}>寄送地址</span>
      </span>
      <span className={styles.progressBar} data-order="1"></span>

      <span className={styles.progressGroup} data-phase="shipping">
        <Complete className={styles.completeIcon}/>
        <span className={styles.progressLabelCurrent}>運送方式</span>
      </span>
      <span className={styles.progressBar} data-order="2"></span>

      <span className={styles.progressGroup} data-phase="credit-card">
        <span className={styles.progressIconCurrent}>
          <span className={styles.textCurrent}>3</span>
        </span>
        <span className={styles.progressLabelCurrent}>付款資訊</span>
      </span>
    </>
  )
}

export default function StepProgress ({step}) {
    return (
      <section className={`${styles.progressContainer} col col-12`}>
        {step === 1 && <AddressPg />}
        {step === 2 && <ShippingPg />}
        {step === 3 && <CreditCardPg />}
      </section>
    );
  }