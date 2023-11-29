import styles from './Form.module.scss';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import { useState } from 'react';



export default function Form () {
  const [step, setSstep] = useState(1);

  return (
    <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <StepProgress></StepProgress>
      
      <Step1 />
      <Step2 />
      <Step3 />
          
      <ProgressControl
        step={step}
      />
    </section>
      
  );
}