// components/layout/ThemeToggle.jsx

import { useEffect, useState } from "react";
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

console.log('SunIcon:', SunIcon);
console.log('MoonIcon:', MoonIcon);

export default function ThemeToggle() {
  // Check initial theme (optional: read from localStorage or prefers-color-scheme)
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  // On mount, read saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="w-10 h-10 p-0 bg-transparent border-none"
    >
      {isDark ? (
        <SunIcon className="max-w-full object-contain block" />
      ) : (
        <MoonIcon className="max-w-[80%] object-contain block"/>
      )}
    </button>
  );
}
