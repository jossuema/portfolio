/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = (props) => {
  const { home, about, portfolio, contact, toRef } = props;

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={(e) => toRef(home, e)} className="navbar-item"><i className="fas fa-bolt"></i>Home</a>
      <a href="#about" onClick={(e) => toRef(about, e)}className="navbar-item"><i className="fas fa-bolt"></i>About</a>
      <a href="#portfolio" onClick={(e) => toRef(portfolio, e)}className="navbar-item"><i className="fas fa-bolt"></i>Portfolio</a>
      <a href="#footer" onClick={(e) => toRef(contact, e)}className="navbar-item"><i className="fas fa-bolt"></i>Contact</a>
    </div>
  );
};

export default Header;
