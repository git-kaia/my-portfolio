import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";

export default function ScrollIndicator() {
  const { ref, isInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      className="w-30 h-10"
      animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <defs>
        <pattern
          id="trianglePattern"
          patternUnits="userSpaceOnUse"
          width="4.5"
          height="8"
          patternTransform="rotate(55)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="var(--accentSecondary)" 
            strokeWidth="2"             
          />
        </pattern>
      </defs>

      {/* Triangle shape filled with pattern */}
      <polygon points="100,60 10,10 190,10" fill="url(#trianglePattern)" stroke="var(--accentPrimary)" strokeWidth="1.7" />
    </motion.svg>
  );
}
