// components/layout/Header.jsx

import Navbar from "./Navbar";
import ThemeToggle from "../ui/ThemeToggle";
import { useLayoutEffect, useRef } from "react";

export default function Header() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const h = ref.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 bg-[var(--bgSecondary)] shadow-md px-6 py-1 flex gap-6 items-center dark:shadow-none"
    >
      <Navbar />
      <ThemeToggle />
    </header>
  );
};
