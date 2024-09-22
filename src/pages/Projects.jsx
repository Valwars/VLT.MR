import { useState, useEffect } from "react";
import hopteo from "../assets/hopteo.png";
import topdev from "../assets/TopDev.png";

import { motion, AnimatePresence } from "framer-motion"; // Importer motion et AnimatePresence depuis framer-motion
import dev from "../assets/devac.png";
import franck from "../assets/ebook.png";
import sparkly from "../assets/sparkly.png";
import lego from "../assets/lego.png";
import { useInView } from "react-intersection-observer"; // Cette bibliothèque peut vous aider à détecter quand un élément est dans la vue
import { ThreeCircles } from "react-loader-spinner";
import convert from "../assets/convert.png";
import word from "../assets/wordathon.png";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const items = [
    <Info setCurrent={setCurrent} />,

    <Composant
    title={"TopDev - Coding Interviews"}
    explain={
      "Website where you can practice coding interviews to improve your skills, with progress tracking."
    }
    img={topdev}
    type={"Digital product"}
    built={
      "NextJS, Vercel, Mongo DB, Stripe, Mistral API, Google’s APIs"
    }
    url={"https://www.topdev-media.com/"}
  />,

    <Composant
      title={"Hopteo Manager"}
      explain={
        "Web application for profile management, data analysis and advertising creation in interaction with the Hopteo application."
      }
      img={hopteo}
      type={"Management web application"}
      built={
        "React, Node JS, Mongo DB, GridFS, Stripe integration, Google’s APIs"
      }
      url={"https://hopteomanager.hopteo.com"}
    />,
    <Composant
      title={"Online sales platform"}
      explain={
        "Customised sales platform created for an independent, enabling him to sell sports-related digital products."
      }
      img={franck}
      type={"E-commerce web application"}
      built={"React, Node JS, Mongo DB, Stripe integration, Google’s APIs"}
      url={"https://www.franck-rcrd.com/ebook"}
    />,

    <Composant
      type={"E-learning application"}
      title={"Dev Academy"}
      explain={"Web application containing tutorials on web development. (no longer online) "}
      img={dev}
      built={"React, Node JS, Mongo DB"}
      url={"https://vlt-devacademy.com/"}
    />,
    <Composant
    title={"WordAthon"}
    explain={"French SUTOM like, first semester Master 1 project. Includes game, statistics, history and data persistence."}
    img={word}
    type={"Web application"}
    built={"Vue.js"}
    url={"https://valwars.github.io/WordAthon"}
  />,
  
    <Composant
      type={"Software Application"}
      title={"Lego Builder"}
      explain={"Software for managing/creating 3D models in the form of Legos."}
      img={lego}
      built={"Java, JavaFX"}
      code={"https://github.com/Valwars/Projet_JAVA-L2"}
    />,
  ];
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
      }} // Animation lorsqu'il entre dans la vue
      transition={{ duration: 0.6, ease: "easeOut" }} // Durée et type de transition
    >
      <div
        key={current}
        {...{
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 0.5 }}
      >
        {items[current]}
      </div>
      <div className="progress">
        {items.map((item, index) => {
          return (
            <div
              onClick={() => setCurrent(index)}
              className={current == index ? "bubble selected" : "bubble"}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

const Info = ({ setCurrent }) => {
  return (
    <div className="content">
      <h1>Portfolio & Previous Projects</h1>
      <p>
        I have built various different projects to fit different aspects of the
        client's business. If you want to see more examples of my work than the
        ones showcased in this site, please contact me !
      </p>
      <h3 onClick={() => setCurrent(1)}>See some projects {">"}</h3>
    </div>
  );
};

const Composant = ({ type, title, explain, img, built, url, code }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="pagecontent">
      <div className="contentleft">
        <h3>{type}</h3>
        <h1>{title}</h1>
        <p>{explain}</p>
        <p>
          <span>Built with : </span>
          {built}
        </p>
        {url && (
          <a href={url} target="__blank">
            Visit the app {">"}
          </a>
        )}
        {code && (
          <a href={code} target="__blank">
            View the code {">"}
          </a>
        )}
      </div>
      <div className="contentright" style={{ position: "relative" }}>
        {!loaded && (
          <ThreeCircles
            height="80"
            width="80"
            color="var(--main-color)"
            wrapperStyle={{}}
            wrapperClass="threeCircles"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        )}
        <img src={img} alt={title} onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
};
export default Projects;
