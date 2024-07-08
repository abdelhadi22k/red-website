import React from "react";
import Rating from "./Rating";

const OpinionsClient = ({ opinionClient }) => {
  return (
    <div className='opinionBox'>
    <div className="opinionContainer">
          <p  className="minParagraph">{opinionClient.opinion}</p>
      <div className='opinionTitle'>
        <div>
          <h4>{opinionClient.clientName}</h4>
          <span>{opinionClient.JobTitle}</span>
        </div>
        <div className='line'></div>
        <div >
          <Rating rating={opinionClient.ratings} />
          <span>{opinionClient.JobTitle}</span>
        </div>
      </div>
    </div>


    </div>
  );
};

export default OpinionsClient;
