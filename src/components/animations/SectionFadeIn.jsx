// components/animations/SectionFadeIn.jsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionFadeIn({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}