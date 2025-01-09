import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-4">
        <motion.h1
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="text-xl font-semibold"
        >
          Portfolio
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/sazzy-sazz-68ba0229b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sazzysazz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://web.facebook.com/Yoo.Sazz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://t.me/ChaoVisal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.instagram.com/_https.sazz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
