import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // Using useRef to handle the form is good saves you from the unneeded re-renders that useState force to, but it also has a downside because resetting those values in a clean way is a bit harder because we actually discarge to use ref to directly minablate the dom
    const eneteredEmail = email.current.value;
    const eneteredPassword = password.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailRegex.test(eneteredEmail);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordIsValid = passwordRegex.test(eneteredPassword);

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    if (!passwordIsValid) {
      setPasswordIsInvalid(true);
      return;
    }
    setPasswordIsInvalid(false);

    console.log(eneteredEmail, eneteredPassword);
    // Reset the values
    // email.current.value = "";
    // password.current.value = "";
    // But this is not a good practice, because it directly manipulates the DOM, which is not the React way. Instead, you should use state to manage form values and reset them, or use the reset method of the form element.
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className="control-error">
            {passwordIsInvalid && <p>Please enter a valid password</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
