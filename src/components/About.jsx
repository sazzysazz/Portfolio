import aboutImg3 from "../assets/aboutImg3.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa"; // Corrected import
import CV from "../assets/Chao Visal.pdf";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-[500px] h-[500px] object-cover"
              src={aboutImg3}
              alt="about"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start lg:pl-20">
            <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
            {/* Download Button */}
            <a
              href={CV} // Dynamically imported file path
              download="Chao_Visal_CV.pdf"
              className="mt-4 flex items-center px-6 py-3 bg-purple-900 text-white rounded-lg shadow-lg hover:bg-purple-500 transition-all"
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
