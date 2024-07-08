import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {


  return (
    <div className="Footer">
      <Container>
        <h1 className="mainTitle">
          Let’s <span> Connect</span> there
        </h1>
      </Container>
      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <footer className="">
        <div className="Created">
          <Container>
            <Row>
              <Col md="6" lg="4" className="CreatedContainer">
                <div class="footerinfo">
                  <img
                    className="footerImg"
                    alt="logoBrand"
                    src="sources/svg/main logo w 3.svg"
                  ></img>
                  <p class="mb-5">
                    Acos Agency is a team specialized in developing and creating
                    websites, and provides its services with design and
                    programming for websites.
                  </p>
                  <div class="copryt">
                    <div>
                      <ul class="d-flex mt-5 list-unstyled gap-3 align-items-center accounts">
                        <li>
                          <a className="d-block text-light" target="blank" href="https://www.facebook.com/people/Acos/100091746498169/">
                            <i class="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a className="d-block text-light" target="blank" href="https://www.instagram.com/acos.ag/?hl=ar">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="d-block text-light" target="blank" href="https://www.linkedin.com/in/a-cos-701331300/">
                            <i class="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2"></i>
                          </a>
                        </li>
                        <li>
                          <a className="d-block text-light" target="blank" href="https://dribbble.com/abdo_k">
                            <i class="fa-brands fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a className="d-block text-light" target="blank" href="https://www.behance.net/cosx">
                            <i class="fa-brands fa-square-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                <div class="footerlinks">
                  <h5 className="sectionTitle">Navigation</h5>
                  <ul class="list-unstyled lh-lg">
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="services"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        services<div></div>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        about<div></div>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="project"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        project<div></div>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        experience<div></div>
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="Contact"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        contact Us<div></div>
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                {" "}
                <div class="footerlinks">
                  <h5 className="sectionTitle">Contact</h5>
                  <ul class="list-unstyled lh-lg">
                    <li>+0123 456 789</li>
                    <li>abdelhadikaba64@<br/>gmail.com</li>
                    <li>Location Algeria - Algeria  (UTC+01:00) </li>
                  </ul>
                </div>
              </Col>

              <Col md="6" lg="4" className="CreatedContainer">
                <div class="footercontect">
                  <h5 class="sectionTitle" style={{color:"#f05454"}}> Let's Start</h5>
                </div>

                <div className="footerInput">
                
                   
                    <a className="mainBtn1" href="#Contact">
                    Get the latest information  <i class="fa-solid fa-paper-plane"></i>
                    </a>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <Container className="FooterContainer">
        <div className="FooterInfo">
          <span>© 2024 acos ( abdelhadi kaba )</span> All rights reserved
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Terms and Conditions</a>
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Privacy Policy</a>
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Cookie Policy</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
