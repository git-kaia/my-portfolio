// pages/Home.jsx
import { Link } from 'react-router-dom';
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/cards/PaperFan";
import Code from "../components/svg/Code";

export default function Home() {
  return (
    <>
      <PageFadeTransition>
        <div className="flex justify-center items-center min-h-[calc(100vh-var(--header-h))]">
          <PaperFan
            className='portfolio-front'
            width="48rem"
            height="40rem"
            layers={[
              { x: 70, y: 20, rot: 5, color: "var(--bgSecondary)", width: "48rem", height: "40rem" },
              { x: 25, y: 10, rot: 10, color: "var(--bgCardPrimary)", width: "48rem", height: "35rem" },
              { x: -25, y: 10, rot: 6, color: "var(--bgCardSecondary)", width: "48rem", height: "35rem" },
              { x: 0, y: 2, rot: 2, color: "var(--bgSecondary)", width: "48rem", height: "35rem" },
            ]}
          >
            <Link to="/about" className="block w-full h-full">
              <div className="flex flex-col items-center h-full">
                <h1 className="p-5 pt-20 text-5xl font-sans text-[var(--accentPrimary)] tracking-widest">
                  Kaja Emilie Berg
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
