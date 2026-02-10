// components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-2xl text-[var(--accentPrimary)]"
      : "text-2xl";

  return (
    <nav className="flex gap-10">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/about" end className={linkClass}>About</NavLink>
      <NavLink to="/projects" end className={linkClass}>Projects</NavLink>
      <NavLink to="/contact" end className={linkClass}>Contact</NavLink>
    </nav>
  );
}
