import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";

import "./sign-up.style.scss";

const SignUp = () => {
  const signUpHandler = (e) => {
    e.preventDefault();
    const password = document.querySelector(".password");
    console.log(password);
  };

  return (
    <div className="sign__up_container">
      <h2>Don't have an account?</h2>
      <form className="form">
        <InputField label="Name" type="text" className="form__input" />
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <InputField label="Confirm Password" type="password" />
        <Button className="btn btn__main" onClick={signUpHandler}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
