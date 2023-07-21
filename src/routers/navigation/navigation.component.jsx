import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { setCurrentUser } from "../../store/user/user.action";

import "./navigation.style.scss";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <>
      <div className="navigation__container">
        <Link to="/" className="brand__name link">
          Cozy Vibes
        </Link>
        <ul className="navigation__list">
          <li className="navigation__list_item">
            <Link to="/" className="link nav__link">
              Home
            </Link>
          </li>
          <li className="navigation__list_item">
            <Link to="/hotel" className="link nav__link">
              Hotel
            </Link>
          </li>
          <li className="navigation__list_item">
            <Link to="/rooms" className="link nav__link">
              Rooms
            </Link>
          </li>
          {/* <li className="navigation__list_item">
            <Link to="/resto&bar" className="link nav__link">
              Resto & Bar
            </Link>
          </li> */}
          <li className="navigation__list_item">
            {currentUser ? (
              <span className="link nav__link" onClick={signOutHandler}>
                Sign Out
              </span>
            ) : (
              <Link to="/auth" className="link nav__link">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
