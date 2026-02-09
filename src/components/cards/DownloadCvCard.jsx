// components/DownloadCvCard.jsx
export default function DownloadCvCard({ href = "/CV.pdf" }) {
  return (
    <a
      href={href}
      download
      className="block rounded-2xl border border-[color:var(--border)] bg-[color:var(--bgSecondary)] p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:var(--bgPrimary)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-m font-semibold text-[color:var(--text)]">
            Download CV
          </div>
          <div className="text-s text-[color:var(--muted)]">
            PDF
          </div>
        </div>
        <span className="text-5xl text-[color:var(--accentPrimary)]">
          ↓
        </span>
      </div>
    </a>
  );
}
