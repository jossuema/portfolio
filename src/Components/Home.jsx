/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import cv from "../CV_ManuelJosueMalla.pdf";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/back-home.webp";
import perfil from "../images/perfil.webp";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title, homeRef }) => {
  return (
    <section id="home" className="min-height" ref={homeRef}>
      <img className="background" src={image} alt="" />
      <div className="contenedor-perfil">
        <img src={perfil} alt="perfil" className="perfil" />
      </div>
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2 style={{ color: "white" }}>{title}</h2>
        <a href={cv} download="CV_ManuelJosueMalla.pdf" target="_blank" rel="noopener noreferrer">
          <button className="buttonDownload" type="button">
            Download CV
          </button>
        </a>
      </div>
      <div className="contenedor-flecha">
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  homeRef: PropTypes.object.isRequired,
};

export default Home;
