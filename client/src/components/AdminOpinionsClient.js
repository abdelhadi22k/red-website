import React from "react";
import Rating from "./Rating";
import { domain } from "../utils/stn";
import axios from "axios";

const OpinionsClient = ({ opinionClient }) => {

    const deletePost = async (opinion) => {
        try {
            await axios.delete(`${domain}/api/opinion/${opinion}`);
            alert("Deleted successfully");
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className='opinionBox losem'>
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

    <button className="mainBtn1" onClick={() => deletePost(opinionClient._id)} > Delete</button>

    </div>
  );
};

export default OpinionsClient;
