// components/svg/StripePattern.jsx
import { useId } from "react";

export function StripePattern({
  stripe = 14,
  gap = 22,
  angle = -40,
  color = "var(--accentSecondary)",
} = {}) {
  const id = useId();
  const tileH = stripe + gap;

  return {
    id,
    defs: (
      <pattern
        id={id}
        x="0"
        y="0"
        width="100"
        height={tileH}
        patternUnits="userSpaceOnUse"
        patternTransform={`rotate(${angle})`}
      >
        <rect
          x="0"
          y="0"
          width="100"
          height={stripe}
          fill={color}
        />

        <animateTransform
          id={`${id}-anim`}
          attributeName="patternTransform"
          type="translate"
          from="0 0"
          to={`0 ${tileH}`}
          dur="0.7s"
          repeatCount="indefinite"
          begin="indefinite"
          additive="sum"
        />
      </pattern>
    ),
  };
}