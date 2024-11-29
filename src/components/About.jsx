import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2 className="cool-font mb-6 text-center text-3xl font-bold">
          Sobre Mí
        </motion.h2>
        <motion.div className="mb-6 space-y-4 text-lg">
          <p>
            Soy desarrollador web recién graduado con un año de experiencia en
            frontend. Mi formación en Nucba y mi participación en el club de
            programadores de la Universidad de Vicente López me brindaron una
            base sólida en desarrollo web.
          </p>
          <p>
            Me especializo en crear sitios y aplicaciones utilizando React,
            Tailwind CSS y Firebase, ofreciendo soluciones eficientes e
            innovadoras. Actualmente resido en Buenos Aires, Argentina, donde
            sigo ampliando mis habilidades.
          </p>
        </motion.div>
        <motion.div className="mt-8">
          <h3 className="mb-4 text-2xl font-bold">Certificaciones</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <a
                href="https://drive.google.com/file/d/1B4i4yhm_0YxNuuuyq3HHfoReKisBOYhb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                Certificado en Diseño Web - Nucba
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1rNxNd9lP6tvuv0pCcIcNWZ0-2Rbcr0VT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                Certificado en Frontend Avanzado - Nucba
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1LYCiReT9k7Mh2TB7l7leL5N0_3z0whaU/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:underline"
              >
                Certificado en React - Nucba
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
