import { useState } from "react";

import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserCollectionAndDocuments,
} from "../../util/firebase/firebase.utils";

import "./sign-up.style.scss";

const defaultInputFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultInputFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const errorHandler = (msg) => {
    setFormFields(defaultInputFields);
    return alert(msg);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password.length < 6)
      return errorHandler("Password must be at least 6 letter long.");

    if (password !== confirmPassword)
      return errorHandler(`Password and confirm password dosen't match`);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      createUserCollectionAndDocuments(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This Email is already in use. Try to sign In.");
      } else {
        console.log(error);
      }
    }

    return setFormFields(defaultInputFields);
  };

  return (
    <div className="sign__up_container">
      <h3 className="heading__tertiary heading__tertiary_colored">
        Don't have an account?
      </h3>
      <form className="form">
        <InputField
          label="Name"
          type="text"
          className="form__input"
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={changeHandler}
          value={confirmPassword}
        />
        <Button className="btn btn__main" onClick={signUpHandler}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
