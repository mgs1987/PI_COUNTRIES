import React from "react";
import "../Footer/Footer.css";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="space-container"></div>
      <div className="footer-container">
        <h5> First Individual Proyect- January 2022 </h5>
      </div>
      <div className="profile-container">
        <h3>Contact me : </h3>
        <h3>
          <Link to="https://github.com/mgs1987" className="icon">
            <VscGithubInverted />
          </Link>
          <Link to="https://www.linkedin.com/in/mercedesGdeS">
            <TfiLinkedin />
          </Link>
        </h3>
      </div>
    </div>
  );
};
