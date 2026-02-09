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
      className="sticky top-0 z-50 bg-[var(--bgSecondary)] shadow-md px-12 py-4"
    >
      <div className="grid grid-cols-3 items-center">
        {/* Left slot (empty for now, or put logo/name later) */}
        <div />

        {/* Center: Navbar always centered */}
        <div className="justify-self-center">
          <Navbar />
        </div>

        {/* Right: Theme toggle out of nav flow */}
        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}