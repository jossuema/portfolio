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
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };  

  return (
    <div id="main">
      <Header {...refs} toRef={scrollToRef}/>
      <Home name={siteProps.name} title={siteProps.title} homeRef={refs.home}/>
      <About aboutRef={refs.about}/>
      <Portfolio primaryColor={primaryColor} secondaryColor={secondaryColor} portfolioRef={refs.portfolio}/>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} contactRef={refs.contact}/>
    </div>
  );
};

export default App;
