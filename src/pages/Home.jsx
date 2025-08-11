// pages/Home.jsx
import SectionFadeIn from "../components/animations/SectionFadeIn"

export default function Home() {
    return (
        <section className="pt-40">
            <SectionFadeIn>
                <h1 className="p-5 text-4xl font-sans text-[var(--accentPrimary)] uppercase tracking-widest text-center">Kaja Emilie Berg</h1>
                <h2 className="text-xl text-[var(--textSecondary)] font-arial uppercase text-center">Full-stack developer</h2>
            </SectionFadeIn>
        </section>
    )
}


