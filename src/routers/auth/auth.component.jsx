import SignIn from "../../components/sign-in-form/sign-in.component";
import SignUp from "../../components/sign-up-form/sign-up.component";

import "./auth.style.scss";

const Auth = () => {
  return (
    <div className="authontication__container">
      <div className="authontication__forms">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Auth;
