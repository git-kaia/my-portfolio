// components/cards/DownloadCvCard.jsx

import Download from "../svg/Download";
export default function DownloadCvCard({ href = "/CV.pdf" }) {
  return (
    <a
      href={href}
      download
      className="flex flex-col items-center justify-center gap-5 transition-colors hover:scale-110"
    >
         <Download className="w-20" />
         <h2 className="text-[var(--accentPrimary)]">Download CV</h2>
    </a>
  );
}
