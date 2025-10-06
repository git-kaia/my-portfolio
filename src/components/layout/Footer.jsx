// components/layout/Footer.jsx
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
    bg-[var(--bgSecondary)] 
    shadow-[0_-4px_6px_rgba(0,0,0,0.1)] 
    px-4 py-0.5 
    flex gap-6 items-center justify-left 
    dark:shadow-none"
    >
      <div>
        <p className="text-xs p-1.5">© 2025 Kaja Emilie Berg</p>
      </div>
    </footer>
  );
};
