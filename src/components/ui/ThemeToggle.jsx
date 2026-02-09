// components/layout/ThemeToggle.jsx

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SunIcon from '../svg/SunIcon';
import MoonIcon from '../svg/MoonIcon';

export default function ThemeToggle() {
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
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="w-12 h-12 p-0 bg-transparent border-none"
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.4 }}
            className="block"
          >
            <SunIcon className="object-contain block" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MoonIcon className="object-contain block" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button >
  );
}

