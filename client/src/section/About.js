import { Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about">
      <Container className="aboutContainer">
        <div className="aboutInfo">
          <div className="aboutTitle">
            <h6 className="sectionTitle">- About us</h6>
            <h1 className="mainTitle">What is acos agency</h1>
            <p className="mainParagraph">
              The agency features a specialized team of developers and web
              designers who have extensive experience in the fields of design
              and programming.
            </p>

            <div className="aboutDetails">
              <div>
                <h6 className="sectionTitle">Practical websites</h6>
                <p className="mainParagraph">
                  Custom website design, responsive development, and seamless
                  user experience.
                </p>
              </div>
              <div>
                <h6 className="sectionTitle">Creative uiux designs</h6>
                <p className="mainParagraph">
                Professional and personalized UIUX designs for you
                </p>
              </div>
            </div>

            <div className="mainBtn">
              <a href="#Contact" className="mainBtn3">
                Let's Start
              </a>
              <a href="#FAQs" className="mainBtn2">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <Image
          loading="lazy"
          alt="aboutUs"
          src="sources/img/about.png"
          fluid
          className="aboutImg"
        />
      </Container>
    </section>
  );
};
export default About;
