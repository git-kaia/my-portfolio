// pages/Home.jsx
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/cards/PaperFan";
import Screens from "../components/svg/Screens";

export default function Home() {
  return (
    <>
      <PageFadeTransition>
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-var(--header-h))]">
          <PaperFan>
            <a href="./About.jsx">
              <div className="flex flex-col items-center h-full">
                <h1 className="p-5 pt-8 text-5xl font-sans text-[var(--accentPrimary)] uppercase tracking-widest">
                  Kaja Emilie Berg
                </h1>
                <h2 className="text-2xl text-[var(--textSecondary)] font-arial uppercase">
                  Full-stack web developer
                </h2>
              </div>
            </a>
          </PaperFan>
        </div>
      </PageFadeTransition >
    </>
  );
}
