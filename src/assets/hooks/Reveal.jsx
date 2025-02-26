import { motion } from "framer-motion";

const Reveal = ({ children, className, direction = "bottom" }) => {
  let initial, animate;

  switch (direction) {
    case "left":
      initial = { opacity: 0, x: -15 };
      animate = { opacity: 1, x: 0 };
      break;
    case "right":
      initial = { opacity: 0, x: 15 };
      animate = { opacity: 1, x: 0 };
      break;
    case "top":
      initial = { opacity: 0, y: -50 };
      animate = { opacity: 1, y: 0 };
      break;
    case "bottom":
    default:
      initial = { opacity: 0, y: 50 };
      animate = { opacity: 1, y: 0 };
      break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;