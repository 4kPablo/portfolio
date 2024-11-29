import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <motion.section
      className="flex h-screen flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="cool-font bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text pb-5 text-4xl font-bold text-transparent sm:text-5xl md:text-7xl">
        Pablo Estigarribia
      </motion.h1>
      <motion.p className="mb-8 max-w-2xl text-xl md:text-2xl">
        Desarrollador web especializado en crear experiencias digitales únicas y
        funcionales
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Button size="lg" asChild>
          <a href="#portfolio">Ver Portfolio</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
