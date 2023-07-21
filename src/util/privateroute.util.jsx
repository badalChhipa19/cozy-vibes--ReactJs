import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";

const PrivateRoute = ({ children, other }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [alertShown, setAlertShown] = useState(false);

  if (user) {
    return children;
  } else {
    if (!alertShown) {
      setAlertShown(true);
      alert("You are not authorized for this page. Please login first.");
    }
    return other;
  }
};

export default PrivateRoute;
