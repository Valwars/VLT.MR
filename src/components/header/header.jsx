import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom";
import "./header.css";

export const Name = () => {
  const navigate = useNavigate();
  return (
    <div className="name" onClick={() => navigate("/#home")}>
      <div className="cube"></div>

      <h1>VLT.MR</h1>
    </div>
  );
};

export const ContactBtn = () => {
  return (
    <Link to="/#contact" id="contactbtn">
      Contact
    </Link>
  );
};

export const Navigation = ({ currentSection }) => {
  return (
    <nav>
      <CustomLink to="/#home" currentSection={currentSection}>
        00
      </CustomLink>
      <CustomLink to="/#about" currentSection={currentSection}>
        01
      </CustomLink>
      <CustomLink to="/#skills" currentSection={currentSection}>
        02
      </CustomLink>
      <CustomLink to="/#projects" currentSection={currentSection}>
        03
      </CustomLink>
      <CustomLink to="/#contact" currentSection={currentSection}>
        04
      </CustomLink>
    </nav>
  );
};

function CustomLink({ to, currentSection, children, ...props }) {
  const isActive = `/#${currentSection}` === to; // Utilisez currentSection pour déterminer si le lien est actif
  return (
    <Link to={to} {...props} className={isActive ? "selected" : ""}>
      {children}
    </Link>
  );
}
