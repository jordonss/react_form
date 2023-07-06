import { useReducer } from "react";

const initialReducer = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
		return {
			value: action.value,
			isTouched: state.isTouched
		}
  }
  if (action.type === "BLUR") {
		return {
			isTouched: true,
			value: state.value
		}
  }
  if (action.type === "RESET") {
		return {
			isTouched: false,
			value: ''
		}
	}
	return inputReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialReducer);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
