import { createContext } from "react";
import { useState } from "react";

export const FormContext = createContext();

export function FormContextProvider ({children}) {
  const [cardData, setCardData] = useState({
    cardUserName: '',
    cardNum: '',
    cardExpiryDate: '',
    cardCCV: '',
  });

  const logInputValues = () => {
    console.log('Step3 input values:', cardData)
  }

  return (
    <FormContext.Provider value={{cardData, setCardData, logInputValues}}>
      {children}
    </FormContext.Provider>
  )
}