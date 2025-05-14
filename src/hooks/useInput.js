import { useState } from "react";

export default function useInput(
  initialValue = "",
  initialDidEdit = false,
  validateValue
) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(initialDidEdit);

  function valueIsValid() {
    return validateValue(enteredValue);
  }

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  // Reset the values
  function reset() {
    setEnteredValue("");
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid(),
    hasError: didEdit && !valueIsValid(),
    handleInputBlur,
    handleInputChange,
    reset,
  };
}

// export function useInput(
//   validateValue,
//   initialValue = "",
//   initialDidEdit = false
// ) {
//   const [enteredValue, setEnteredValue] = useState(initialValue);
//   const [didEdit, setDidEdit] = useState(initialDidEdit);

//   function valueIsValid() {
//     return validateValue(enteredValue);
//   }

//   function handleInputChange(event) {
//     setEnteredValue(event.target.value);
//     setDidEdit(false);
//   }

//   function handleInputBlur() {
//     setDidEdit(true);
//   }

//   return {
//     value: enteredValue,
//     isValid: valueIsValid(),
//     hasError: didEdit && !valueIsValid(),
//     handleInputChange,
//     handleInputBlur,
//   };
// }
