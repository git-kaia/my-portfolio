// components/svg/Code.jsx

import { StripePattern } from "./StripePattern";

export default function Code({ className = "" }) {

    const pattern = StripePattern();

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -10 1400 1000"
        >
            <defs>{pattern.defs}</defs>

            {/* GitHub Logo */}
            <path
                d="M163.99,490.36L490.57,163.79h-163.29L.71,490.36l326.57,326.57h163.29L163.99,490.36ZM980.42,163.79h-163.28l326.57,326.57-326.57,326.57h163.28l326.58-326.57-326.58-326.57ZM694.67.5l-204.11,979.72h122.46L817.14.5h-122.47"
                fill={`url(#${pattern.id})`}
                stroke="var(--accentPrimary)"
                strokeWidth="28"
            />
        </svg>
    );
}