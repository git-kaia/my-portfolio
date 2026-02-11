// pages/Home.jsx
import { Link } from 'react-router-dom';
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/cards/PaperFan";
import Code from "../components/svg/Code";

export default function Home() {
  return (
    <>
      <PageFadeTransition>
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-var(--header-h))]">
          <PaperFan>
            <Link to="/about" className="block w-full h-full">
              <div className="flex flex-col items-center h-full">
                <h1 className="p-5 pt-20 text-5xl font-sans text-[var(--accentPrimary)] uppercase tracking-widest">
                  Name
                </h1>
                <h2 className="text-2xl text-[var(--textSecondary)] font-arial uppercase">
                  Full-stack web developer
                </h2>
                 <Code className="w-36 mt-24" />
              </div>
            </Link>
          </PaperFan>
        </div>
      </PageFadeTransition >
    </>
  );
}
