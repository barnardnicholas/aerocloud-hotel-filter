import React from "react";
import ResultCard from "./ResultCard";
import "./results.css";

const Results = ({ results }) => {
  return (
    <>
      <p>{results.length + " "}results found</p>
      <ul className="resultsarea">
        {results.map(result => {
          const { name, starRating, facilities } = result;
          return (
            <ResultCard
              key={name}
              name={name}
              starRating={starRating}
              facilities={facilities}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Results;
