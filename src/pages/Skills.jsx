import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import stripe from "../assets/stripe.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import php from "../assets/php.png";
import react from "../assets/react.png";
import next from "../assets/Next.png";
import vue from "../assets/vue.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Cette bibliothèque peut vous aider à détecter quand un élément est dans la vue

const Skills = () => {
  const items = [
    next,
    react,
    vue,
    node,
    html,
    css,
    js,
    git,
    figma,
    java,
    stripe,
    python,
    php,
  ];
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: `${40}% 0px`, // Définir la marge d'intersection
  });

  return (
    <div id="skills">
      <div
        ref={ref}
        className="content"
        initial={{ opacity: 0, y: 0 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animation lorsqu'il entre dans la vue
        transition={{ duration: 0.6, ease: "easeOut" }} // Durée et type de transition
      >
        <h3>Like an urge to code.</h3>
        <h1>Skills & Experience</h1>
        <p>
          The main area of expertise is full stack development (client-side and
          web server-side).
        </p>
        <p>
          For the client side, HTML, CSS, JS, building small and medium web
          applications with React, custom plugins, features, animations, and
          coding interactive layouts. I also have experience as a full-stack
          developer building API Rest with NodeJS, Express, MongoDB. These
          skills enable me to create complete web applications.
        </p>
      </div>
      <div
        ref={ref}
        className="icons"
        initial={{ opacity: 0, y: 100 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animation lorsqu'il entre dans la vue
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }} // Durée et type de transition
      >
        {items.map((item) => {
          return <img src={item} alt="skill icon"></img>;
        })}
      </div>

      <div className="round"></div>
    </div>
  );
};

export default Skills;
