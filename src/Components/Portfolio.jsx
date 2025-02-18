/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import PropTypes from "prop-types";
import image from "../images/portfolio.webp";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";

const imageAltText = "desktop with books and laptop";

const Portfolio = (props) => {
  const { secondaryColor, portfolioRef, projectList } = props;

  return (
    <section
      className=""
      id="portfolio"
      style={{ backgroundColor: secondaryColor }}
      ref={portfolioRef}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="imgPortfolio" style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              backgroundColor: "skyblue",
              boxShadow: "10px 10px 20px #00b4db",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          <Fade cascade damping={0.1}>
            {projectList.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

Portfolio.defaultProps = {
  name: "",
};

Portfolio.propTypes = {
  portfolioRef: PropTypes.object.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
};

export default Portfolio;
