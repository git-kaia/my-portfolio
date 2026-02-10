// components/cards/DownloadCvCard.jsx
export default function DownloadCvCard({ href = "/CV.pdf" }) {
  return (
    <a
      href={href}
      download
      className="group block rounded-2xl border border-[color:var(--border)] bg-[color:var(--bgSecondary)] p-6 shadow-md transition hover:shadow-lg focus:outline-none active:bg-[color:var(--bgPrimary)]"
    >
      <div className="flex items-center justify-between gap-6">
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
      </div>
    </a>
  );
}
