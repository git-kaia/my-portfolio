// pages/Contact.jsx
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/cards/PaperFan";

// Icons
import EmailIcon from "../components/svg/EmailIcon";
import LinkedIn from "../components/svg/LinkedIn";
import GitHub from "../components/svg/GitHub";
import DownloadCvCard from "../components/cards/DownloadCvCard";
import Download from "../components/svg/Download";


const email = "kaja.berg@outlook.com";
const linkedInUrl = "https://www.linkedin.com/in/kaja-emilie-berg-031792395/";
const githubUrl = "https://github.com/git-kaia";

export default function Contact() {
  return (
    <PageFadeTransition>
      <div className="flex align-center items-center min-h-[calc(100vh-var(--header-h))]">
        <div className="p-10">
          <PaperFan
            className='contact-socials'
            layers={[
              { x: 0, y: -20, rot: 5, color: "var(--bgCardPrimary)", width: "40rem", height: "32rem" },
              { x: 0, y: -2, rot: -2, color: "var(--bgSecondary)", width: "40rem", height: "32rem" },
            ]}
          >

            <div className="flex flex-col items-center align-center gap-10">
              <h1 className="p-20 text-4xl font-sans text-[var(--accentPrimary)]">
                Get in touch...
              </h1>

              <div className="flex items-baseline justify-center gap-20">
                <div>
                  <a
                    className="flex flex-col items-center justify-center gap-4 transition-colors hover:scale-110"
                    href={`mailto:${email}`}
                  >
                    <EmailIcon className="w-20 object-contain stripe-animated-icon" />
                    <h2 className="text-[var(--accentPrimary)]">Email</h2>
                  </a>
                </div>

                <div>
                  <a
                    className="flex flex-col items-center justify-center gap-4 transition-colors hover:scale-110"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub className="w-16 object-contain stripe-animated-icon" />
                    <h2 className="text-[var(--accentPrimary)]">GitHub</h2>
                  </a>
                </div>

                <div>
                  <a
                    className="flex flex-col place-items-center justify-center gap-4 transition-colors hover:scale-110"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn className="w-16 object-contain stripe-animated-icon" />
                    <h2 className="text-[var(--accentPrimary)]">LinkedIn</h2>
                  </a>
                </div>
              </div>
            </div>
          </PaperFan>
        </div>

        <div className="p-10">
          <PaperFan
            className='download-cv'
            layers={[
              { x: 2, y: 10, rot: 6, color: "var(--bgSecondary)", width: "30rem", height: "32rem" },
            ]}
          >
            <div className="flex flex-col items-center align-center gap-10">
              <h1 className="p-10 pt-20 text-4xl font-sans text-[var(--accentPrimary)]">
                Get my resume...
              </h1>
              <DownloadCvCard href="/cv.pdf" />
            </div>
          </PaperFan>
        </div>
      </div >
    </PageFadeTransition >
  );
}
