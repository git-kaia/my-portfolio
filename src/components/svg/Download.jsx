// components/svg/Code.jsx

import { StripePattern } from "./StripePattern";

export default function Download({ className = "" }) {

    const pattern = StripePattern();

    return (
        <svg
            className={`stripe-animated-icon ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-15 -10 1700 1500"
            onMouseEnter={() => {
                document.getElementById(`${pattern.id}-anim`)?.beginElement();
            }}
            onMouseLeave={() => {
                document.getElementById(`${pattern.id}-anim`)?.endElement();
            }}
        >
            <defs>{pattern.defs}</defs>

            {/* GitHub Logo */}
            <path
                d="M1182.06,601.18c-.67,19.43-9.14,37.76-23.5,50.86l-356.69,340.7c-27.91,26.62-71.8,26.62-99.71,0l-356.69-340.7c-21.65-19.98-28.99-51.11-18.55-78.66,10.43-27.55,36.55-46,66.01-46.63h0c19.51-.42,38.35,7.08,52.25,20.79l234.59,223.6V73.55c-.22-19.16,7.19-37.62,20.59-51.32,13.4-13.7,31.69-21.52,50.86-21.73,19.44-.22,38.14,7.41,51.89,21.16,13.74,13.74,21.37,32.45,21.15,51.89v697.98l234.6-223.99c13.76-13.72,32.47-21.32,51.91-21.08,19.43.24,37.94,8.31,51.36,22.36,13.41,14.07,20.6,32.94,19.93,52.36Z"
                fill={`url(#${pattern.id})`}
                stroke="var(--accentPrimary)"
                strokeWidth="28"
            />
            <path
                d="M64.49,871.18C27.54,875.43-.15,907.04.51,944.23v333.77c-.07,19.25,7.54,37.74,21.16,51.36s32.1,21.23,51.36,21.16h1358.53c19.16-.07,37.51-7.75,51-21.35,13.5-13.6,21.05-32,20.97-51.16v-333.77c1.71-20.14-5.11-40.08-18.79-54.96-13.68-14.89-32.97-23.36-53.18-23.36s-39.51,8.47-53.19,23.36c-13.68,14.88-20.49,34.82-18.79,54.96v261.79H145v-261.79c.37-20.82-8.26-40.79-23.68-54.79-15.43-13.99-36.14-20.65-56.82-18.26Z"
                fill={`url(#${pattern.id})`}
                stroke="var(--accentPrimary)"
                strokeWidth="28"
            />
        </svg>
    );
}