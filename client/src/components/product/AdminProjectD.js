import axios from "axios";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { domain } from "../../utils/stn";
import { Link } from "react-router-dom";

const itemsPerPage = 5;

const AdminProjectD = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const deletePost = async (projectId) => {
    try {
      await axios.delete(`${domain}/api/project/${projectId}`);
      alert("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="ProjectContainer">
        {currentItems.length !== 0 ? (
          currentItems.map((element) => {
            return (
              <div key={element.id} className="mb-2">
                <div className="projectBox">
                  <Image
                    loading="lazy"
                    className="projectImg"
                    src={element.projectImg}
                    alt={element.title}
                    fluid
                  />
                  <div className="projectInfo">
                    <div>
                      {element.tags.map((tag, index) => {
                        return (
                          <span key={index} className="mainBtn1">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <h1 className="mainTitle">{element.title}</h1>
                    <p className="mainParagraph"> {element.description} </p>
                    <button
                      className="mainBtn1"
                      onClick={() => deletePost(element._id)}
                    >
                      DELETE
                    </button>
                    <Link to={`/Admin-acos-12333/project/${element._id}`}>
                    <button className="mainBtn3">UPDATE</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>One moment please</h3>
        )}
      </div>
      <div className="totalPages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="PagesButton"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectD;
