import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Debian Website",
    description: "Rediseño de la página web de Debian utilizando HTML y Sass.",
    image: "/debian.png",
    technologies: ["HTML", "SASS"],
    github: "https://github.com/4kPablo/debian-website",
    live: "https://debian-website.vercel.app",
    date: "Junio de 2022",
  },
  {
    title: "Clon de Youtube (mobile)",
    description:
      "Versión móvil de Youtube implementada con React y Tailwind. Se aprecia mejor desde un teléfono o reduciendo el ancho de la ventana.",
    image: "/youtube_clon.png",
    technologies: ["HTML", "React", "Tailwind"],
    github: "https://github.com/4kPablo/youtube-clon",
    live: "https://youtube-clonn.vercel.app/",
    date: "Junio de 2024",
  },
  {
    title: "Battle Llamas",
    description:
      "E-commerce ficticio con textos e imágenes generados por IA. El carrito es funcional y es totalmente responsive.",
    image: "/battle_llamas.png",
    technologies: ["HTML", "React", "Tailwind"],
    github: "https://github.com/4kPablo/battle-llamas",
    live: "https://battle-llamas.vercel.app/",
    date: "Enero de 2024",
  },
  {
    title: "Club de Programadores",
    description:
      "HUB de encuentro para el Club del CUVL. Yo diseñé el frontend y mis compañeros desarrollaron el backend.",
    image: "/club_programadores.png",
    technologies: ["HTML", "React", "Tailwind", "Shadcn/ui"],
    github: "https://github.com/Club-Programadores/HUB_ClubProg",
    live: "https://clubprogramadores-fork.vercel.app",
    date: "Diciembre de 2024",
  },
  {
    title: "Historiarte con Ale",
    description:
      "Landing Page para una profesora de historia con dashboard para modificaciones.",
    image: "/historiarte.png",
    technologies: ["HTML", "React", "Tailwind", "Shadcn/ui", "Firebase"],
    github: "https://github.com/4kPablo/historiarte-con-ale",
    live: "https://historiarteconale.ar/",
    date: "Noviembre de 2024",
  },
  {
    title: "Mirta Bravo psicología",
    description:
      "Landing Page para una profesional de la psicología que también hace videos para Youtube y tiene libros publicados, visibles desde la web.",
    image: "/mirtabravo.png",
    technologies: ["HTML", "React", "Tailwind", "Shadcn/ui"],
    github: "https://github.com/4kPablo/Mirta-Bravo_psico",
    live: "https://mirtabravo.vercel.app/",
    date: "Enero de 2025",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2 className="cool-font mb-12 text-center text-3xl font-bold">
          Mi Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col border-purple-500/50 bg-black/50">
                <CardHeader className="pb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-2 aspect-[4/3] w-full rounded object-cover"
                  />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 pb-3">
                  <p className="text-sm text-muted-foreground">
                    {project.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex justify-between gap-3">
                  <Button className="w-full" variant="outline" asChild>
                    {/* <Github /> */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código fuente
                    </a>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Página web
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
