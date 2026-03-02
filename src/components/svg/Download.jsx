// components/svg/Code.jsx
import { StripePattern } from "./StripePattern";

export default function CodeIcon({ className = "" }) {
  const pattern = StripePattern(); // { id, defs }

  const handleEnter = () => {
    document.getElementById(`${pattern.id}-anim`)?.beginElement();
  };
  const handleLeave = () => {
    document.getElementById(`${pattern.id}-anim`)?.endElement();
  };

  return (
    <svg
      className={`stripe-animated-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-15 -10 700 700"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <defs>{pattern.defs}</defs>

      <path
        d="M.5,333.83C.5,176.7.5,98.13,49.32,49.32,98.13.5,176.7.5,333.83.5s235.7,0,284.52,48.82c48.82,48.82,48.82,127.38,48.82,284.52s0,235.7-48.82,284.52c-48.81,48.82-127.38,48.82-284.52,48.82s-235.7,0-284.52-48.82C.5,569.54.5,490.97.5,333.83ZM333.83,142.17c13.81,0,25,11.19,25,25v172.98l57.32-57.32c9.76-9.76,25.59-9.76,35.35,0s9.76,25.59,0,35.35l-100,100c-4.69,4.69-11.05,7.32-17.68,7.32s-12.99-2.63-17.68-7.32l-100-100c-9.76-9.76-9.76-25.59,0-35.35,9.76-9.76,25.59-9.76,35.36,0l57.32,57.32v-172.98c0-13.81,11.19-25,25-25ZM200.5,475.5c-13.81,0-25,11.19-25,25s11.19,25,25,25h266.67c13.81,0,25-11.19,25-25s-11.19-25-25-25H200.5Z"
        fill={`url(#${pattern.id})`}
        stroke="var(--accentPrimary)"
        strokeWidth="22"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        fillRule="evenodd"
      />
    </svg>
  );
}