// components/svg/EmailIcon.jsx

import { StripePattern } from "./StripePattern";

export default function EmailIcon({ className = "" }) {

  const pattern = StripePattern();

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 575"
    >
      <defs>{pattern.defs}</defs>

      {/* Envelope base */}
      <path
        fill="var(--accentPrimary)"
        d="M799.8,24.22c-.1-2.97-.52-5.95-1.7-8.8-3.88-9.32-13-15.42-23.1-15.42H25C14.9,0,5.78,6.1,1.9,15.43c-1.17,2.87-1.62,5.88-1.7,8.88-.03.27-.2,525.7-.2,525.7,0,13.8,11.2,25,25,25h750c13.8,0,25-11.2,25-25,0,0-.17-525.48-.2-525.78ZM539.07,296.3l235.93-235.95v471.9l-235.93-235.95ZM757.4,550H42.68l235.97-235.97,103.65,103.65c4.9,4.87,11.3,7.32,17.7,7.32s12.8-2.45,17.68-7.32l103.7-103.7,236.02,236.02ZM400,400L25,25h750l-375,375ZM260.98,296.35L25,532.32V60.35l235.98,236Z"
      />

      {/* Pattern-filled triangle */}
      <polygon
        points="25 25 775 25 400 400 25 25"
        fill={`url(#${pattern.id})`}
      />
    </svg>
  );
}