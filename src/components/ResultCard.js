import React from "react";
import "./resultcard.css";

const ResultCard = ({ name, starRating, facilities }) => {
  return (
    <li className="resultcard">
      <h3>{name}</h3>
      <p>{`${starRating} stars`}</p>
      <p>Facilities: {facilities.length ? facilities.join(", ") : "none"}</p>
    </li>
  );
};

export default ResultCard;
