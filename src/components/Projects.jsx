import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project.image}
              width={150}
              height={150}
              className="mb-6 rounded"
              alt={project.title}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              <a
                href={project.url} // Use the project URL here
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer" // Ensure security for external links
                className="text-blue-500 hover:underline" // Add some styles for the link
              >
                {project.title}
              </a>
            </h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-4 bg-neutral-50 px-2 py-2 text-sm font-medium text-purple-500 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
