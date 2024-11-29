import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

import { SiTailwindcss, SiFirebase, SiVisualstudiocode } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    { name: "Sass", icon: <FaSass />, link: "https://sass-lang.com/" },
    {
      name: "JavaScript",
      icon: <FaJs />,
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    { name: "React", icon: <FaReact />, link: "https://es.react.dev/" },
    { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com/" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/" },
    { name: "shadcn/ui", icon: <SiShadcnui />, link: "https://ui.shadcn.com/" },
    {
      name: "VS Code",
      icon: <SiVisualstudiocode />,
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      link: "https://firebase.google.com/?hl=es-419",
    },
  ];

  return (
    <motion.section
      id="tech-stack"
      className="px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2 className="cool-font mb-6 text-center text-3xl font-bold">
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5">
          {technologies.map((tech, index) => (
            <motion.a
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={tech.link}
              target="_blank"
              rel="noopener"
            >
              <div className="mb-2 text-4xl">{tech.icon}</div>
              <span className="text-center text-sm">{tech.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
