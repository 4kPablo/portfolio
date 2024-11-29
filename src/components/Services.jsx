import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="mb-4 h-8 w-8" />,
      title: "Desarrollo Web",
      description:
        "Creación de sitios web responsivos y aplicaciones web utilizando las últimas tecnologías.",
    },
    {
      icon: <Palette className="mb-4 h-8 w-8" />,
      title: "Diseño UI/UX",
      description:
        "Diseño de interfaces atractivas y experiencias de usuario intuitivas.",
    },
    {
      icon: <Rocket className="mb-4 h-8 w-8" />,
      title: "Optimización y Rendimiento",
      description:
        "Mejora del rendimiento y la velocidad de carga de sitios web existentes.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2 className="cool-font mb-12 text-center text-3xl font-bold">
          Mis Servicios
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-purple-500/50 bg-black/50">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
