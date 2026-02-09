// components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 flex-1 justify-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-xl text-[var(--accentPrimary)] dark:text-[var(--accentPrimary)]" : "text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-xl text-[var(--accentPrimary)] dark:text-[var(--accentPrimary)]" : "text-xl"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-xl text-[var(--accentPrimary)] dark:text-[var(--accentPrimary)]" : "text-xl"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-xl text-[var(--accentPrimary)] dark:text-[var(--accentPrimary)]" : "text-xl"
          }
        >
          Contact
        </NavLink>
    </nav>
  );
};
