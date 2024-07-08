import React from "react";
import { Col, Row } from "react-bootstrap";

const NavProject = ({ showCategory, allCat }) => {

  const navTitle = (cato, buttonId) => {
    showCategory(cato);
  };

  return ( 
    <div className='NavProject'>
      <Row>
        <Col sm="12" className="d-flex justify-content-center">

          {allCat.length !== 0 ? (

            allCat.map((elm) => {
              // className={lng.code === i18n.language ? "x" : ""}
              return (
                <div className="showCategory">
                  <button onClick={() => navTitle(elm)}  className="btnX" >
                    {elm}
                  </button>
                </div>
              );
            })
          ) : (
            <h2>One moment please</h2>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NavProject;
