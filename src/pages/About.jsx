// pages/About.jsx
import SectionFadeIn from "../components/animations/SectionFadeIn";

export default function About() {
    return (
        <>
            <section className="pt-20 min-h-screen">
                <SectionFadeIn>
                    <h1 className="p-2 text-4xl font-sans text-[var(--accentPrimary)] tracking-widest uppercase text-center">About me</h1>
                    <p>Hello, I'm Kaja -- a web-developer passionate about creating user-friendly, tidy and refreshing websites. Please scroll to  </p>
                </SectionFadeIn>
            </section>

            <section className="pt-20 min-h-screen">
                <SectionFadeIn>
                    <h2 className="text-xl text-[var(--textSecondary)] font-arial uppercase text-center">Full-stack developer</h2>
                </SectionFadeIn>
            </section>
        </>
    )
}

