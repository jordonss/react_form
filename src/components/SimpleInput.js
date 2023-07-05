import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEneteredName] = useState("");
	const [enteredNameIsValid, setEneteredNameIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    setEneteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() == "") {
			setEneteredNameIsValid(false)
      return;
    }

		setEneteredNameIsValid(true)

    const enteredValue = nameInputRef.current.value;

    setEneteredName("");
  };

	const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
				{!enteredNameIsValid && <p className="error-text">must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
