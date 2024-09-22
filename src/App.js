import logo from "./logo.svg";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Name, ContactBtn, Navigation } from "./components/header/header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import dots from "./assets/dots.png";

function App() {
  const location = useLocation(); // Obtenir l'emplacement courant

  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      const currentPosition = window.scrollY;

      if (
        currentPosition >= homeSection.offsetTop &&
        currentPosition < aboutSection.offsetTop
      ) {
        setCurrentSection("home");
      } else if (
        currentPosition >= aboutSection.offsetTop &&
        currentPosition < skillsSection.offsetTop
      ) {
        setCurrentSection("about");
      } else if (
        currentPosition >= skillsSection.offsetTop &&
        currentPosition < projectsSection.offsetTop
      ) {
        setCurrentSection("skills");
      } else if (
        currentPosition >= projectsSection.offsetTop &&
        currentPosition < contactSection.offsetTop
      ) {
        setCurrentSection("projects");
      } else {
        setCurrentSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        console.log(hash);
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  return (
    <div className="App">
      <header>
        <Name />
        <ContactBtn />
      </header>

      <div className="fullpage">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <img src={dots} alt="background dots" className="dots" />
      </div>
      <Navigation currentSection={currentSection} />
    </div>
  );
}

export default App;
