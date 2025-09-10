// components/layout/Footer.jsx
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="
    bg-[var(--bgSecondary)] 
    shadow-[0_-4px_6px_rgba(0,0,0,0.1)] 
    px-4 py-2 
    flex gap-6 items-center justify-center 
    dark:shadow-none"
    >
      <div>
        <p>© 2025 Kaja Emilie Berg</p>
      </div>
    </footer>
  );
};
