import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";



const Card = ({id, name, continent, flag_image}) =>{
    console.log("aca esta el ID ", name)
    return (
        
    <Link to={`/${id}`} className="card">
        
         <img className="country-flag" src={flag_image} alt={name} key='key'/>
         <h2 className="h2-name">{name}</h2>
         <h3 className="h3-continent">
            {continent}
        </h3>
       

    </Link>
    )
    
}

export default Card;