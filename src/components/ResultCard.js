import React from "react";

const ResultCard = ({ name, starRating, facilities }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{`${starRating} stars`}</p>
      <p>Facilities: {facilities.length ? facilities.join(", ") : "none"}</p>
    </li>
  );
};

export default ResultCard;
