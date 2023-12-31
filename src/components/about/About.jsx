import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>Curiosity-driven, diving into
          <br/>  the world of Web Development
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/code.jpeg" alt="code" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Full Stack</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>Developer</h1>
          <button>About Me</button>
        </div>
      </motion.div>
      <motion.div className="aboutContainer">
        <div className="box">
          <h2>Who I am</h2>
          <p>
            I am a graduate from UC Santa Barbara with a degree in Communication
            and a background in marketing. However, my passion lies in Web
            Development and Computer Science. I have recently completed the
            Full-Stack Certificate program at UC Berkeley Extension, where I
            gained comprehensive skills in both front-end and back-end
            development. I am proficient in JavaScript, React, CSS, HTML, and
            have experience working with APIs and MongoDB. I am now actively
            seeking a Full-Stack position where I can combine my technical
            expertise with my problem-solving abilities, teamwork skills, and
            curiosity to contribute to the development of innovative and
            impactful web applications.
          </p>
          <motion.a className="button is-primary" href={resumePDF} download="SamHigaResume.pdf">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download My Resume!</span>
            </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;