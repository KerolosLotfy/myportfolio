import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>inTheSky</h2>

        <div className="ILinks">
          <p>Important Links</p>
          <Link to="/dash">Dashboard</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About Me</Link>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          width="500"
          height="200"
          title="My Location"
        ></iframe>

        <p> 
          Made By <b>Kerolos</b>
        </p>
      </div>
    </footer>
  );
};
