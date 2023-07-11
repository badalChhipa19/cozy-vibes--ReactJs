import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";

import "./sign-in.style.scss";

const SignIn = () => {
  return (
    <div className="sign__in_container">
      <h2>Already have an account?</h2>
      <form className="form">
        <InputField
          label="Email"
          type="email"
          className="form__input input__email"
        />
        <InputField label="Password" type="password" />
        <Button className="btn btn__main">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
