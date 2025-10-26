// components/layout/Header.jsx

import Navbar from "./Navbar";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[4rem] bg-[var(--bgSecondary)] shadow-md px-6 py-1 flex gap-6 items-center dark:shadow-none">
        <Navbar />
        <ThemeToggle />
    </header>
  );
};
