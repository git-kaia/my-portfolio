// components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 items-center">
      <div className="flex gap-6 flex-1 justify-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-lg text-primaryBlue" : "text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-lg text-primaryBlue" : "text-lg"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-lg text-primaryBlue" : "text-lg"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-lg text-primaryBlue" : "text-lg"
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="flex-0">
        <ThemeToggle />
      </div>
    </nav>
  );
};
