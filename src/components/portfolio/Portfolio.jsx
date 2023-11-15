import "./portfolio.scss";
import { motion, useScroll , useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Park App",
    img: "/parkapp.jpg",
    desc: "This is a project",
  },
  {
    id: 2,
    title: "Gymder",
    img: "/gymder.jpeg",
    desc: "This is a project",
  },
  {
    id: 3,
    title: "Emojify",
    img: "/Emojify.jpg",
    desc: "This is a project",
  },
  {
    id: 4,
    title: "E-Commerce Back End",
    img: "/commerce.jpeg",
    desc: "This is a project",
  },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
        target: ref,
        target: ref,
        // offset: ["start start", "end start"]
      target: ref,
        // offset: ["start start", "end start"]
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="buttonContainer">
                <button>See Live Site</button>
                <button>See Repo</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    const Portfolio = () => {
        const ref = useRef();
      
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["end end", "start start"],
        });
      
        const scaleX = useSpring(scrollYProgress, {
          stiffness: 100,
          damping: 30,
        });
      
        return (
          <div className="portfolio" ref={ref}>
            <div className="progress">
              <h1>Featured Works</h1>
              <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
              <Single item={item} key={item.id} />
            ))}
          </div>
        );
      };
      
      export default Portfolio;
