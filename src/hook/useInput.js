import {useState} from 'react'

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputISTuched, setInputIsTuched] = useState(false);

  const inputIsValid = validation(enteredValue);
  const enteredInputIsInvalid = !inputIsValid && inputISTuched;

  const changeInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const blureInputHandler = () => {
    setInputIsTuched(true);
  };
  const reset=()=>{
    setEnteredValue('')
    setInputIsTuched(false)
  }
  return {
    value:enteredValue,
    isTuched:inputISTuched,
    inputIsValid,
    enteredInputIsInvalid,
    reset,
    changeInputHandler,
    blureInputHandler
  }
}

export default useInput