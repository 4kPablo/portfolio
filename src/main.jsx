import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./globals.css";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-black to-purple-900">
    <BackgroundAnimation />
    <div className="relative z-10 space-y-10">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
    </div>
    <Toaster />
  </div>,
);
