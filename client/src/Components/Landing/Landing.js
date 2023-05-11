import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing center">
      <div>
        <h2 className="title">
          Primer Proyecto Integrador - Mercedes Gonzalez de Sampaio
        </h2>
        <h2 className="ready">Let´s Go!</h2>
        <Link to="/home">
          <button className="button"> PRESS ME </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
