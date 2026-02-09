// pages/Contact.jsx
import PageFadeTransition from "../animations/PageFadeTransition";

// Icons
import EmailIcon from "../components/svg/EmailIcon";
import LinkedIn from "../components/svg/LinkedIn";
import GitHub from "../components/svg/GitHub";
import DownloadCvCard from "../components/cards/DownloadCvCard";

const email = "kaja.berg@outlook.com";
const linkedInUrl = "https://www.linkedin.com/in/kaja-emilie-berg-031792395/";
const githubUrl = "https://github.com/git-kaia";

export default function Contact() {
  return (
    <PageFadeTransition>
      <div className="flex flex-col align-center items-center gap-28 min-h-[calc(100vh-var(--header-h))]">

        <h1 className="p-10 pt-36 text-4xl font-sans text-[var(--accentPrimary)]">
          Get in touch...
        </h1>

        <div className="flex items-baseline justify-center gap-20">
          <div>
            <a
              className="flex flex-col items-center justify-center gap-4 transition-colors"
              href={`mailto:${email}`}
            >
              <EmailIcon className="w-20 object-contain" />
              <h2>Email</h2>
            </a>
          </div>

          <div>
            <a
              className="flex flex-col items-center justify-center gap-4 transition-colors"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="w-16 object-contain" />
              <h2>GitHub</h2>
            </a>
          </div>

          <div>
            <a
              className="flex flex-col place-items-center justify-center gap-4 transition-colors"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="w-16 object-contain" />
              <h2>LinkedIn</h2>
            </a>
          </div>
        </div>

        <DownloadCvCard href="/cv.pdf" />

      </div>

    </PageFadeTransition>
  );
}
