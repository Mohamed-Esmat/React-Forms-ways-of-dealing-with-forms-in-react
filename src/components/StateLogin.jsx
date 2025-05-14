import Input from "./Input";
import { isEmail, isPassword } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailIsInValid,
    handleInputBlur: handleEmailInputBlur,
    handleInputChange: handleEmailInputChange,
    reset: resetEmail,
  } = useInput("", false, isEmail);
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordIsInValid,
    handleInputBlur: handlePasswordInputBlur,
    handleInputChange: handlePasswordInputChange,
    reset: resetPassword,
  } = useInput("", false, isPassword);

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailIsValid || !passwordIsValid) {
      // we only have the emailIsValid, passwordIsValid, emailIsInValid and passwordIsInValid to check if the form is valid, and we want to prevent the form from being submitted and show the errors even if the user has not edited the inputs yet, so we need to set the didEdit to true for both inputs and we do so as follows
      handleEmailInputBlur();
      handlePasswordInputBlur();
      return;
    }
    // If the form is valid, we can do something with the entered values
    console.log(enteredEmail, enteredPassword);
    // Reset the values
    resetEmail();
    resetPassword();
    // Do something with the values, like sending them to a server
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailInputBlur}
          onChange={handleEmailInputChange}
          value={enteredEmail}
          error={emailIsInValid && "Please enter a valid email address"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handlePasswordInputBlur()}
          onChange={(e) => handlePasswordInputChange(e)}
          value={enteredPassword}
          error={
            passwordIsInValid &&
            "Password must be at least 8 characters long and contain at least one letter and one number."
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
