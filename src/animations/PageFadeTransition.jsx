// animations/PageFadeTransition.jsx
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./PageVariants.jsx";

export default function PageSlideTransition({ children, direction }) {
  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTransition}
      className="flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.div>
  );
}

