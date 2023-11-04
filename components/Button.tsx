import { motion } from "framer-motion";

export default function RedirectButton({ buttonProps }) {
  return (
    <motion.div
      className="mt-2 py-7 w-fit ml-auto"
      whileTap={{
        x: "100%", // move the button to the right (100% of its width)
        opacity: 0, // make it disappear
        scale: 0.5,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <motion.button
        className="ml-auto btn btn-primary p-3 rounded-xl"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
          backgroundColor: "#32CD32",
        }}
        onClick={buttonProps}>
        Get Started
      </motion.button>
    </motion.div>
  );
}

