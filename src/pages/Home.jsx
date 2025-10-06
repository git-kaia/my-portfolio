// pages/Home.jsx
import SectionFadeIn from "../animations/section-animations/SectionFadeIn";

export default function Home() {
  return (
    <SectionFadeIn className="h-full flex flex-col items-center justify-center">
      <h1 className="p-5 text-5xl font-sans text-[var(--accentPrimary)] uppercase tracking-widest">
        Kaja Emilie Berg
      </h1>
      <h2 className="text-2xl text-[var(--textSecondary)] font-arial uppercase">
        Full-stack web developer
      </h2>
    </SectionFadeIn>
  );
}
