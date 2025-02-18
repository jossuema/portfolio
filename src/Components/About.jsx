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

const skillDescription = "Here are some of the skills I have learned and used in my projects:";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about some areas of current technology as software development, data science and electronics";

const About = ({ aboutRef, skillsList }) => {
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
  skillsList: PropTypes.array.isRequired,
};

export default About;
