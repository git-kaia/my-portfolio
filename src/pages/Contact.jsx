// pages/Contact.jsx
import EmailIcon from '../assets/icons/email.svg';

const email = "kaja.berg@outlook.com";

export default function Contact() {
  return (
    <section className='flex flex-col items-center justify-center pt-5'>
      <h1 className="p-10 text-4xl font-sans text-primaryBlue">
        Have any questions?
      </h1>
      <a
        href={`mailto:${email}`}
        className="p-5 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <img className="w-10 object-contain" src={EmailIcon} alt="Email icon" />
        <span>{email}</span>
      </a>
    </section>
  );
}
