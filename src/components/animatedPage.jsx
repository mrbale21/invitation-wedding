import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full bg-black text-accent"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
