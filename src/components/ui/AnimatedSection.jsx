// components/ui/AnimatedSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({
    children,
    className = "",
    motionStyle = {}, // Custom styles for motion div
    height = "h-[300vh]",
}) {
    const ref = useRef(null);

    // Track scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Default fade+scale
    const defaultOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const defaultScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]);

    // Allow custm overrides
    const animatedStyle = {
        opacity: motionStyle.opacity || defaultOpacity,
        scale: motionStyle.scale || defaultScale,
        ...motionStyle,
    };

    return (
        <section ref={ref} className={`relative ${height}`}>
            <div className="sticky top-[4rem] h-screen p-0 flext items-center justify-center">
                <motion.div
                    style={animatedStyle}
                    className={`w-full max-w-3xl mx-auto text-center p-8 ${className}`}
                    >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
