import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Cette bibliothèque peut vous aider à détecter quand un élément est dans la vue

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <>
      <div id="about">
        <div className="pagecontent">
          <motion.div
            ref={ref}
            className="contentleft"
            initial={{ opacity: 0, y: 100 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animation lorsqu'il entre dans la vue
            transition={{ duration: 0.6, ease: "easeOut" }} // Durée et type de transition
          >
            <h1>
              Hey,
              <br />
              I’m Valentin...
            </h1>
            <h3>Full Stack Developer / Javascript Lover / And much more...</h3>
          </motion.div>
          <motion.div
            ref={ref}
            className="contentright"
            initial={{ opacity: 0, x: 100 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animation lorsqu'il entre dans la vue
            transition={{ duration: 0.6, ease: "easeOut" }} // Durée et type de transition
          >
            {" "}
            <p>
              21 years old, Master's student in HMI (Human Machine Interaction)
              in Toulouse, France.
            </p>{" "}
            <p>
              I've had a lot of experience as a freelance developer and as part
              of a team during numerous internships and personal experiences.
            </p>{" "}
            <p>
              Passionate about development, my dream is to be able to develop
              web applications and software from A to Z and to know all the
              details.
            </p>{" "}
            <p>I also share web development tutorials on instagram.</p>{" "}
          </motion.div>
        </div>
        <div className="cube2"></div>
      </div>
    </>
  );
};

export default About;
