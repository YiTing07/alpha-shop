import styles from './ProgressControl.module.scss'
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';
import { useContext } from 'react';
import { FormContext } from '../../../contexts/FormContext';

function ControlBtn({ step, handleStepClick, handleClickOrder }) {
  return (
    <>
      {step > 1 && (
        <button className={styles.prev} onClick={() => handleStepClick(-1)}>
          <LeftArrow />
          上一步
        </button>
      )}
      {step < 3 ? (
        <button className={styles.next} onClick={() => handleStepClick(1)}>
          下一步
          <RightArrow />
        </button>
      ) : (
        <button className={styles.next} onClick={handleClickOrder}>
          確認下單
        </button>
      )}
    </>
  )
}

export default function ProgressControl({ step, handleStepClick }) {
  const { logInputValues } = useContext(FormContext)

  const handleClickOrder = () => {
    logInputValues();
  }

  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <section className={`${styles.buttonGroup} col col-12`}>
        <ControlBtn
          step={step}
          handleStepClick={handleStepClick}
          handleClickOrder={handleClickOrder}
        />
      </section>
    </section>
  );
}