import { useDispatch } from "react-redux";
import { useState } from "react";

import { setCurrentUser } from "../../store/user/user.action";
import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";

import "./sign-in.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const registeredUsers = JSON.parse(localStorage.getItem("users"));
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const changehandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    if (!registeredUsers) {
      setFormFields(defaultFormFields);
      return alert(`User dosen't exist`);
    }
    const user = registeredUsers.find(
      (user) =>
        user.email === formFields.email && user.password === formFields.password
    );
    if (!user) {
      setFormFields(defaultFormFields);
      return alert(`Invalid credentials or user does not exist`);
    }

    dispatch(setCurrentUser(user));
    return setFormFields(defaultFormFields);
  };

  return (
    <div className="sign__in_container">
      <h2>Already have an account?</h2>
      <form className="form" onSubmit={handleSignIn}>
        <InputField
          label="Email"
          type="email"
          className="form__input input__email"
          name="email"
          value={email}
          onChange={changehandler}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changehandler}
        />
        <Button className="btn btn__main">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
