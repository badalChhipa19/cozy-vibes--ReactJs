import { Link, Outlet } from "react-router-dom";

import "./navigation.style.scss";

const Navigation = () => {
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
            <Link to="/about" className="link nav__link">
              About
            </Link>
          </li>
          <li className="navigation__list_item">
            <Link to="/rooms" className="link nav__link">
              Rooms
            </Link>
          </li>
          <li className="navigation__list_item">
            <Link to="/resto&bar" className="link nav__link">
              Resto & Bar
            </Link>
          </li>
          <li className="navigation__list_item">
            <Link to="/auth" className="link nav__link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
