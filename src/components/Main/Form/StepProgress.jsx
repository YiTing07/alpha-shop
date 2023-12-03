import styles from './StepProgress.module.scss'
import { ReactComponent as Complete } from '../../../assets/icons/pg-complete.svg'

function Progress ({step, num, phase, progressTitle}) {
  if(step < num) {
    return (
      <>
        <span className={styles.progressGroup} data-phase={phase} step={step}>
          <span className={styles.progressIconUndone}>
            <span className={styles.textUndone}>{num}</span>
          </span>
          <span className={styles.progressLabelUndone}>{progressTitle}</span>
        </span>
      </>
    )
  } else if (step > num) {
    return (
      <>
        <span className={styles.progressGroup} data-phase={phase} step={step}>
          <Complete className={styles.completeIcon}/>
          <span className={styles.progressLabelCurrent}>{progressTitle}</span>
        </span>
      </>
    )
  } else {
    return (
      <>
        <span className={styles.progressGroup} data-phase={phase} step={step}>
          <span className={styles.progressIconCurrent}>
            <span className={styles.textCurrent}>{num}</span>
          </span>
          <span className={styles.progressLabelCurrent}>{progressTitle}</span>
        </span>
      </>
    )
  } 
}

function ProgressBar ({step, num}) {
  if (step < num) {
    return (
      <span className={`${styles.progressBar} ${styles.undone}`} data-order={num}></span>
    )
  } else {
    return (
      <span className={styles.progressBar} data-order={num}></span>
    )
  }
  
}

export default function StepProgress ({step}) {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <Progress
        step={step}
        num="1"
        phase="Address"
          progressTitle="寄送地址"
      />
      <ProgressBar step={step} num="1"/>
       <Progress
        step={step}
        num="2"
        phase="Shipping"
        progressTitle="運送方式"
      />
      <ProgressBar step={step} num="2"/>
      <Progress
        step={step}
        num="3"
        phase="CreditCard"
        progressTitle="付款資訊"
      />
    </section>
  );
}