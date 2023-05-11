import React from "react";
import "../CardActivity/CardActivity.css";

export const CardActivity = ({ name, difficulty, duration, season }) => {
  return (
    <div className="cardact">
      <h1 className="subtitles1">
        <span>Activity:</span> "{name}"
      </h1>
      <h2 className="subtitles">
        <span>Difficulty:</span>
        {difficulty}
      </h2>
      <h2 className="subtitles">
        <span>Duration:</span> {duration} minutes
      </h2>
      <h2 className="subtitles">
        <span>Season:</span> {season}
      </h2>
    </div>
  );
};

export default CardActivity;
