/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a student at Universidad Tecnica de Machala in Ecuador. I love building technology and digital solutions focused on real-world problems";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
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

const skillDescription = "Here are some of the skills I have learned and used in my projects:";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about some areas of current technology as software development, data science and electronics";

const About = ({ aboutRef }) => {
  return (
    <section className="" id="about" style={{ background: "#203a61" }} ref={aboutRef}>
      <div className="aboutDiv">
        <h2 style={{ color: "white" }}>About Myself</h2>
        <p className="large" style={{ color: "white", fontSize: "1.25rem" }}>
          {description}
        </p>
        <hr style={{ borderColor: "#0078d4" }} />
        <h3 style={{ color: "white" }}>{skillDescription}</h3>
        <ul className="skillsList">
          {skillsList.map((skill) => (
            <li key={skill.name}>
              <img
                src={skill.img}
                alt={skill.name}
                style={{ height: "2rem", width: "2rem", marginRight: "1rem" }}
              />
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
        <hr style={{ borderColor: "#0078d4" }} />
        <p style={{ padding: "1rem 3rem 0", color: "white" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

About.defaultProps = {
  name: "",
};

About.propTypes = {
  aboutRef: PropTypes.object.isRequired,
};

export default About;
