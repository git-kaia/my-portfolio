// components/cards/DownloadCvCard.jsx

import Download from "../svg/Download";
export default function DownloadCvCard({ href = "/CV.pdf" }) {
  return (
    <a
      href={href}
      download
      // className="group block rounded-2xl border border-[color:var(--border)] bg-[color:var(--bgSecondary)] p-6 shadow-md transition hover:shadow-lg focus:outline-none active:bg-[color:var(--bgPrimary)]"
      className="flex flex-col items-center justify-center gap-5 transition-colors hover:scale-110"
    >
      {/* <div className="flex items-center justify-between gap-6">
        <div>
          <div className="text-m font-semibold text-[color:var(--textPrimary)] group-hover:text-[color:var(--accentPrimary)]">
            Download CV
          </div>
          <div className="text-s text-[color:var(--muted)]">
            PDF
          </div>
        </div>
        <span className="text-5xl text-[color:var(--textPrimary)] group-hover:text-[color:var(--accentPrimary)]">
          ↓
        </span>
      </div> */}

         <Download className="w-25" />
         <h2 className="text-[var(--accentPrimary)]">Download CV</h2>
    </a>
  );
}
