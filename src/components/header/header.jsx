import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom";
import "./header.css";

export const Name = () => {
  const navigate = useNavigate();
  return (
    <div className="name" onClick={() => navigate("/VLT.MR/#home")}>
      <div className="cube"></div>

      <h1>VLT.MR</h1>
    </div>
  );
};

export const ContactBtn = () => {
  return (
    <Link to="/VLT.MR/#contact" id="contactbtn">
      Contact
    </Link>
  );
};

export const Navigation = ({ currentSection }) => {
  return (
    <nav>
      <CustomLink to="/VLT.MR/#home" currentSection={currentSection}>
        00
      </CustomLink>
      <CustomLink to="/VLT.MR/#about" currentSection={currentSection}>
        01
      </CustomLink>
      <CustomLink to="/VLT.MR/#skills" currentSection={currentSection}>
        02
      </CustomLink>
      <CustomLink to="/VLT.MR/#projects" currentSection={currentSection}>
        03
      </CustomLink>
      <CustomLink to="/VLT.MR/#contact" currentSection={currentSection}>
        04
      </CustomLink>
    </nav>
  );
};

function CustomLink({ to, currentSection, children, ...props }) {
  const isActive = `/VLT.MR/#${currentSection}` === to; // Utilisez currentSection pour déterminer si le lien est actif
  return (
    <Link to={to} {...props} className={isActive ? "selected" : ""}>
      {children}
    </Link>
  );
}
