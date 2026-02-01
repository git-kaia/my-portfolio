// pages/Home.jsx
import PageFadeTransition from "../animations/PageFadeTransition";

export default function Home() {
  return (
    <PageFadeTransition>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-var(--header-h))]">
        <h1 className="p-5 text-5xl font-sans text-[var(--accentPrimary)] uppercase tracking-widest">
          Kaja Emilie Berg
        </h1>
        <h2 className="text-2xl text-[var(--textSecondary)] font-arial uppercase">
          Full-stack web developer
        </h2>
      </div>
    </PageFadeTransition >
  );
}
