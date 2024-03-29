import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

const Card = ({ id, name, continent, flag_image }) => {
  return (
    <Link to={`/${id}`} className="card">
      <img className="country-flag" src={flag_image} alt={name} key="key" />
      <h2 className="h2-name">{name}</h2>
      <h3 className="h3-continent">{continent}</h3>
      <Link to={`/${id}`} className="footer-card">
        <h4>See more</h4>
      </Link>
    </Link>
  );
};

export default Card;
