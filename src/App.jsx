/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import { useRef } from "react";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Josue Malla",
  title: "Software Developer - IT Student",
  email: "mmalla1@outlook.com",
  gitHub: "jossuema",
  instagram: "josuema_th",
  linkedIn: "manuel-josue-malla",
  medium: "",
  twitter: "jossuema_",
  youTube: "jossuema",
};

const skillsList = [
  {
    name: "Python",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/python.png",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "Typescript",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    name: "Java",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    name: "C#",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
  },
  {
    name: "Julia",
    level: "Beginner",
    img: "https://julialang.org/assets/infra/logo.svg",
  },
  {
    name: "React",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "AngularJs",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/angularjs.png",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Express.js",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/express.png",
  },
  {
    name: "TensorFlow",
    level: "Beginner",
    img: "https://img.icons8.com/color/48/000000/tensorflow.png",
  },
  {
    name: "Pythorch",
    level: "Beginner",
    img: "https://pytorch.org/assets/images/pytorch-logo.png",
  },
  {
    name: "SQL Server",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/sql.png",
  },
  {
    name: "MySQL",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  },
  {
    name: "MongoDB",
    level: "Beginner",
    img: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/postgreesql.png",
  },
  {
    name: "Git",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "Linux",
    level: "Intermediate",
    img: "https://img.icons8.com/color/48/000000/linux.png",
  },
  {
    name: "Docker",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/docker.png",
  },
  {
    name: "Azure",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/azure-1.png",
  },
  {
    name: "FastAPI",
    level: "Advanced",
    img: "https://img.icons8.com/color/48/000000/api-settings.png",
  },
  {
    name: "NextJS",
    level: "Beginner",
    img: "https://img.icons8.com/color/48/000000/nextjs.png",
  },
];

const projectList = [
  {
    title: "Library System UTMACH",
    description:
      "I made a system for the university library to manage the books, students, and loans. It was made with Java, MySQL, and JavaSWING.",
    url: "https://github.com/jossuema/SystemBiblioteca-UTMACH",
  },
  {
    title: "Dispersion measurement web simulator",
    description:
      "I made a web simulator for the dispersion measurement for my probability and statistics subject. It was made with TypeScript, React and TailwindCSS.",
    url: "https://jossuema.github.io/MedidasDispersion-Simulador/",
  },
  {
    title: "AVL Tree Simulator",
    description:
      "Created a desktop simulator for AVL trees for my data structures subject. It was made with Java and JavaSwing.",
    url: "https://github.com/paulzamm/SimuladorArbolAVL",
  },
  {
    title: "API Casa Olimpo",
    description:
      "I made an API for a real estate company to manage the properties, clients, and sales. It was made with FastAPI, PostgreSQL, and Docker. Using Azure for deployment.",
    url: "https://github.com/jossuema/api-casa-olimpo",
  },
  {
    title: "API SISCA",
    description:
      "I am developing an API for my university to manage the students, teachers, and courses. It is made with FastAPI, PostgreSQL, and Docker. Currenlty testing with Mobile App.",
    url: "https://github.com/jossuema/API-SISCA",
  },
  {
    title: "And more soon...",
    description: "I am working on new projects, you can see them soon in my GitHub account.",
    url: "https://github.com/jossuema",
  },
];

const primaryColor = "#0078d4";
const secondaryColor = "#203a61";

const App = () => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const scrollToRef = (ref, e) => {
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="main">
      <Header {...refs} toRef={scrollToRef} />
      <Home name={siteProps.name} title={siteProps.title} homeRef={refs.home} />
      <About aboutRef={refs.about} skillsList={skillsList} />
      <Portfolio
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        portfolioRef={refs.portfolio}
        projectList={projectList}
      />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        contactRef={refs.contact}
      />
    </div>
  );
};

export default App;
