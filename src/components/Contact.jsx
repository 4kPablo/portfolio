import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./hooks/use-toast";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarte. Te responderé en breve.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "Hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema de red. Por favor, intentá nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2 className="cool-font mb-12 text-center text-3xl font-bold">
          Contacto
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Información de contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:pablolestigarribia@gmail.com"
                    className="hover:underline"
                  >
                    pablolestigarribia@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaInstagram className="mr-2" />
                  <a
                    href="https://www.instagram.com/4000pablo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    instagram.com/4000pablo
                  </a>
                </li>
                <li className="flex items-center">
                  <FaGithub className="mr-2" />
                  <a
                    href="https://github.com/4kPablo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/4kPablo
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  <a href="tel:+5491122527773" className="hover:underline">
                    +54 9 11 2252-7773
                  </a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Buenos Aires, Argentina
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex">
                <li className="flex items-center pt-4">
                  <FaRegCopyright className="mr-2" />
                  <p>{currentYear} Pablo Estigarribia | Web developer</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Enviame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="subject"
                value={`New message from ${name}`}
              />
              <input
                type="hidden"
                name="access_key"
                value="94889cc0-5341-40f2-a15b-08cbee1ad377"
              />
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
