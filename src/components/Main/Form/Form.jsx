import styles from './Form.module.scss';
import StepProgress from './StepProgress';
import Address from './Address';
import Shipping from './Shipping';
import CreditCard from './CreditCard';
import ProgressControl from './ProgressControl';
import { useState } from 'react';
import { FormContextProvider } from '../../../contexts/FormContext';



export default function Form () {
  const [step, setStep] = useState(1);

  const handleStepClick = (num) => setStep(step + num)

  return (
    <FormContextProvider>
      <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <StepProgress step={step} />

      {step === 1 && <Address />}
      {step === 2 && <Shipping />}
      {step === 3 && <CreditCard />}
          
      <ProgressControl
        step={step}
        handleStepClick={handleStepClick}
      />
    </section>
    </FormContextProvider>
    
      
  );
}