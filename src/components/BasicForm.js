import useReducer from "../hooks/use-reducer";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useReducer(isNotEmpty);

  const {
    value: secondName,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: secondNameReset,
  } = useReducer(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetError,
  } = useReducer(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstName, secondName, email);
    firstNameReset();
    secondNameReset();
    emailResetError();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
            value={secondName}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
      </div>

      <div>
        {(firstNameHasError || secondNameHasError || emailHasError) && (
          <p className="error-text">Name or Email must be valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid ? true : false}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
