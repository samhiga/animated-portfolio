import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Park App",
    img: "/parkapp.jpg",
    desc: "ParkApp is a web application that allows users to rent out their parking spots and enables other users to find and rent available parking spots. It functions similarly to Airbnb but for parking spots. Users can list their parking spots for rent, set availability and pricing, and users looking for parking can search for available spots, make reservations, and pay securely through the platform. Built with React.js, MD Bootstrap, Node.js, used MongoDB for the database.",
    liveSite: "https://park-app.herokuapp.com/",
    repo: "https://github.com/samhiga/park-app",
  },
  {
    id: 2,
    title: "Gymder",
    img: "/gymder.jpeg",
    desc: "Finding a workout partner can often be difficult and scary for some people. Gym Buddy combats this problem by offering an application that can assist with finding and connecting you with potential gym partners. Simply create a profile and enter your bio and your training goals and match with other users you feel have similar goals. Built with Javascript, Node.js, Bootstrap, and MySQL",
    liveSite: "",
    repo: "https://github.com/daevidvo/Gym-Buddy",
  },
  {
    id: 3,
    title: "Emojify",
    img: "/Emojify.jpg",
    desc: "There are thousands of movies available for streaming. Users end up spending hours to pick a movie. This app makes it easier for users to decide on a movie based on user's moods and inclinations that are expressed through emojis. The user is presented with emojis to pick from and the algorithm recommends a list of movies. If the user ever wants to look at their past movie suggestions, they have option to do so as well. Built primarily with Javascript and jQuery, and styled with CSS and Bulma.",
    liveSite: "https://samhiga.github.io/emojify/",
    repo: "https://github.com/samhiga/emojify",
  },
  {
    id: 4,
    title: "E-Commerce Back End",
    img: "/commerce.jpeg",
    desc: "This is a back-end program that stores information in a database for a retail store. Users can reference the data via Insomnia, in which they can see information on different items and categories that the store has. They can also add items and edit their information as well. Built with Node.js, Express.js, and MySQL.",
    liveSite: "",
    repo: "https://github.com/samhiga/e-commerce-back-end",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
            {/* conditionally render buttons so they only appear if they have a link */}
            {item.liveSite && (
                <button>
                  <a
                    href={item.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Live Site
                  </a>
                </button>
              )}
              {item.repo && (
                <button>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Repo
                  </a>
                </button>
              )}
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
