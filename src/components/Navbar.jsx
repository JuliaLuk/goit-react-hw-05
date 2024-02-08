import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navbar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navbar = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" className={buildLinkClass}>
            Payments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
