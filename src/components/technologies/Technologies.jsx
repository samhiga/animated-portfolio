import "./technologies.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
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

const Technologies = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Crafting seamless digital experiences
          <br /> with the power of technology
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/code2.webp" alt="" />
          <h1>
            <motion.b></motion.b> My
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b>Technologies</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Front-end Devlopment</h2>
          <ul> 
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Framer-Motion </li> 
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Back-end Development</h2>
          <ul> 
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose ODM</li>
            <li>MySQL</li>
            <li>Sequelize.js</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Dev Tools and Version Control</h2>
          <ul> 
            <li>Webpack</li>
            <li>CLI</li>
            <li>Git</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Testing, APIs, and Others</h2>
          <ul> 
            <li>Jest</li>
            <li>Unit Testing</li>
            <li>Apollo GraphQL</li>
            <li>JSON Web Token(JWT)</li>
            <li>Object-Oriented Programming(OOP)</li>
            <li>Fetch and AJAX</li>
            <li>Server Side APIs </li> 
            <li>Web Services APIs </li> 
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
