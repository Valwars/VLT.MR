import { Link } from "react-router-dom";
import mockup from "../assets/home.png";
const Home = () => {
  return (
    <>
      <div id="home">
        <div className="pagecontent">
          <div className="contentleft">
            <h1>Full-Stack Web Developer</h1>
            <p>
              Passionate about programming and design, I love creating web
              applications from A to Z, combining an intelligent graphical
              interface with deep functionality.
            </p>
            <Link to="/#about">About me {" >"}</Link>
          </div>
          <div className="contentright">
            <img src={mockup} alt="" />
          </div>
        </div>
      </div>
      <div className="cube"></div>
    </>
  );
};

export default Home;
