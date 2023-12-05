import styles from './ProgressControl.module.scss'
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';
import { useContext } from 'react';
import { FormContext } from '../../../contexts/FormContext';

function ControlBtn ({step, handleClickPrev, handleClickNext, handleClickOrder}) {
  if (step === 1) {
    return (
      <button className={styles.next} onClick={handleClickNext}>
            下一步
        <RightArrow />
      </button>
    )
  } else if (step === 2) {
    return (
      <>
        <button className={styles.prev} onClick={handleClickPrev}>
          <LeftArrow />
            上一步
        </button>
        <button className={styles.next} onClick={handleClickNext}>
            下一步
          <RightArrow />
        </button>
      </> 
    )
  } else if (step === 3) {
    return (
      <>
        <button className={styles.prev} onClick={handleClickPrev}>
          <LeftArrow />
            上一步
        </button>
        <button className={styles.next} onClick={handleClickOrder}>
          確認下單
        </button>
      </>
    )
  }
}

export default function ProgressControl ({step, handleClickPrev, handleClickNext}) {
  const {logInputValues} = useContext(FormContext)

  const handleClickOrder = () => {
    logInputValues();
  }
  
    return (
      <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        <section className={`${styles.buttonGroup} col col-12`}>
          <ControlBtn 
            step={step} 
            handleClickPrev={handleClickPrev} 
            handleClickNext={handleClickNext}
            handleClickOrder={handleClickOrder}
          />
        </section>
      </section>
    );
  }