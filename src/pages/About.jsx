// pages/About.jsx
import SectionFadeIn from "../components/animations/SectionFadeIn";

export default function About() {
  return (
    <>
      <SectionFadeIn className="h-full flex flex-col items-center justify-center p-5">
        <h1 className="pb-16 text-4xl font-sans text-[var(--accentPrimary)] tracking-widest uppercase text-center">
          About me
        </h1>
        <p>
          Hello, I'm Kaja -- a web-developer passionate about creating
          user-friendly, tidy and refreshing websites. Please scroll to find out
          more about me.{" "}
        </p>
      </SectionFadeIn>
      <SectionFadeIn className="h-full flex flex-col items-center justify-center p-5">
        <h2 className="text-xl text-[var(--textSecondary)] font-arial uppercase text-center">
          Late bloomer
        </h2>
        <p>
          It took me a little longer to figure out that technology is really
          what I want to do for work.
        </p>
      </SectionFadeIn>
    </>
  );
}
