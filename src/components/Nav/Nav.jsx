import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import clsx from "clsx";

export default function Nav() {
   
  const active = ({ isActive }) => {return clsx(s.navLink, isActive && s.active)};

    return (
    <nav className={s.nav}>
      <NavLink to="/" className={active}>Home</NavLink>
      <NavLink  to="/catalog" className={active}>Catalog</NavLink>
    </nav>
  );
}