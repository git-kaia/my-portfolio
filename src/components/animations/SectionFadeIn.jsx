// components/animations/SectionFadeIn.jsx

import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";

export default function SectionFadeIn({ children, className }) {
    const { ref, isInView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1} : {}}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}