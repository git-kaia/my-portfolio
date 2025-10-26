// animations/PageFadeTransition.jsx
import { motion } from "framer-motion";

export default function PageFadeTransition({ children }) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}

