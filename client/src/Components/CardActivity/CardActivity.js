import React from 'react';
import "../CardActivity/CardActivity.css";


function CardActivity({name,difficulty,duration,season}) {

  
  return (
    <div className="cardact">
      
        <h1 className="subtitles1">{name}</h1>
        <h2 className="subtitles">Difficulty: {difficulty}</h2>
        <h2 className="subtitles">Duration: {duration} minutes</h2>
        <h2 className="subtitles">Season: {season}</h2>
    </div>
  )
}

export default CardActivity