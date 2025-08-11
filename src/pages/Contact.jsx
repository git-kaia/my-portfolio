// pages/Contact.jsx
import EmailIcon from '../components/icons/EmailIcon';

const email = "kaja.berg@outlook.com";

export default function Contact() {
  return (
    <section className='flex flex-col items-center justify-center pt-5'>
      <h1 className="p-10 text-4xl font-sans text-primaryBlue">
        Have any questions?
      </h1>
      <a
        href={`mailto:${email}`}
        className="p-5 flex items-center gap-2 transition-colors"
      >
        <EmailIcon className="w-10 object-contain" />
        <span>{email}</span>
      </a>
    </section>
  );
}
