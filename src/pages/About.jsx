// pages/About.jsx
import SectionFadeIn from "../components/animations/SectionFadeIn";
import ScrollTriangle from "../components/animations/ScrollTriangle";

export default function About() {
    return (
        <>
            <SectionFadeIn className="min-h-[90vh] flex flex-col items-center justify-between p-5">
                <h1 className="p-12 text-4xl font-sans text-[var(--accentPrimary)] tracking-widest uppercase text-center">
                    About me
                </h1>

                <p className="pb-20">
                    Hello, I'm Kaja -- a web-developer passionate about creating
                    user-friendly, tidy and refreshing websites. Please scroll to find out
                    more about me.{" "}
                </p>

                <ScrollTriangle />

            </SectionFadeIn>
            <SectionFadeIn className="h-full flex flex-col items-center justify-center p-5">
                <h2 className="text-xl text-[var(--textSecondary)] font-arial uppercase text-center">
                    More about me
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum eos necessitatibus voluptatibus et consectetur harum dignissimos eum eaque quis, animi magnam, amet distinctio corporis sunt! Dicta voluptatibus quaerat quod!
                </p>
            </SectionFadeIn>
        </>
    );
}
