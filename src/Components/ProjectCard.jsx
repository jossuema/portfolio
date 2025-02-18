import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="box" key={project.title}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
          textDecoration: "none",
          display: "block",
          height: "100%",
        }}
      >
        <h3 style={{ flexBasis: "40px" }}>
          {project.title}
          <span className="flechaSpan">-&gt;</span>
        </h3>
        <p className="small">{project.description}</p>
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
