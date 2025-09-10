// pages/Contact.jsx
import EmailIcon from "../components/icons/EmailIcon";
import SectionFadeIn from "../components/animations/SectionFadeIn";

const email = "kaja.berg@outlook.com";

export default function Contact() {
  return (
      <SectionFadeIn className="h-full flex flex-col justify-center items-center pt-5">
        <h1 className="p-10 text-4xl font-sans text-[var(--accentPrimary)]">
          Have any questions?
        </h1>
        <a
          href={`mailto:${email}`}
          className="py-5 flex items-center justify-center gap-2 transition-colors"
        >
          <EmailIcon className="w-10 object-contain" />
          <p>{email}</p>
        </a>
      </SectionFadeIn>
  );
}
