import styles from './ProgressControl.module.scss'
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';

function ControlBtn ({step, handleClickNext, handleClickPrev}) {
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
        <button className={styles.next} onClick={handleClickNext}>
          確認下單
        </button>
      </>
    )
  }
}

export default function ProgressControl ({step, handleClickNext, handleClickPrev}) {
    return (
      <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        <section className={`${styles.buttonGroup} col col-12`}>
          <ControlBtn
            step={step}
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
          />
        </section>
      </section>
    );
  }