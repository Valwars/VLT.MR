import { send } from "emailjs-com";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Cette bibliothèque peut vous aider à détecter quand un élément est dans la vue

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [toSend, setToSend] = useState({
    email: "",
    name: "",
    message: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 6000,
    transition: Slide,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!localStorage.getItem("email")) {
      if (toSend.message.length < 10) {
        toast.error("Message too short", toastOptions);
      } else if (toSend.name.length < 2) {
        toast.error("Name too short", toastOptions);
      } else if (toSend.email.length < 8) {
        toast.error("Invalid email.", toastOptions);
      } else {
        send("service_aiw4bho", "template_38km459", toSend, "UfCZg0XpsCllsPCsU")
          .then((response) => {
            toast.success("The email has been sent !", toastOptions);
            localStorage.setItem("email", true);
          })
          .catch((err) => {
            toast.error(
              "An error occurred while sending the email.",
              toastOptions
            );
          });
        setToSend({ email: "", name: "", message: "" });
      }
    } else {
      toast.error("You have already sent an email.", toastOptions);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      ref={ref}
      initial={{ opacity: 0, x: -200, y: -100 }} // État initial de l'élément (invisible et légèrement décalé vers le bas)
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200, y: 0 }} // Animation lorsqu'il entre dans la vue
      transition={{ duration: 0.6, ease: "easeOut" }} // Durée et type de transition
    >
      <ToastContainer progressClassName="toastProgress" />

      <div className="pagecontent">
        <div className="contentleft">
          <h1>Want to work with me ?</h1>
          <h3>Full Stack Developer / Javascript Lover / And much more...</h3>
        </div>
        <div className="contentright">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={toSend.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                value={toSend.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit">Let's get started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
