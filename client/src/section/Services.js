import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services" id="services">
      <Container className="servicesContainer">
        <div className="servicesTitle">
          <h6 className="sectionTitle">- Our services</h6>
          <h1 className="mainTitle">Learn about our service offers</h1>
          <p className="mainParagraph">
            We offer a range of different digital services Specialized in
            developing various types of software. You can view all our digital
            services here
          </p>

          <div className="mainBtn">
            <a href="#FAQs" className="mainBtn3">
              learn more
            </a>
            <a href="#Contact" className="mainBtn2">
              let's start
            </a>
          </div>
        </div>

        <div className="serviceHolder">
          <div
            className="serviceBox"
          >
            <div className="serviceIcon">
              <lord-icon
                src="https://cdn.lordicon.com/dqrpfjei.json"
                trigger="hover"
                colors="primary:#F5F5F5,secondary:#F5F5F5"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </div>

            <h1 className="mainTitle">UXUI Design</h1>
            <p className="mainParagraph">
            UIUX design and also design the visual and interactive aspects of 
            web and mobile applications to enhance the user experience and make 
            them attractive.
            </p>

            <a href="#FAQs" className="mainBtn2">
              let's start
            </a>
          </div>
          <div
            className="serviceBox"
          >
            <div className="serviceIcon">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/rokunbup.json"
                trigger="hover"
                colors="primary:#F5F5F5,secondary:#F5F5F5"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </div>

            <h1 className="mainTitle">WEB Development</h1>
            <p className="mainParagraph">
            Programming and developing websites and web applications, 
            including electronic stores and web applications customized 
            with the latest technologies
            </p>

            <a href="#FAQs" className="mainBtn2">
              let's start
            </a>
          </div>
          <div
            className="serviceBox"
          >
            <div className="serviceIcon">
              <lord-icon
                src="https://cdn.lordicon.com/jtkfemwz.json"
                trigger="morph"
                state="morph-check"
                colors="primary:#F5F5F5,secondary:#F5F5F5"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </div>

            <h1 className="mainTitle">SEO</h1>
            <p className="mainParagraph">

            Supporting websites with search engines and making them appear 
            on the first pages of search engines and reaching many visitors

            </p>


            <a href="#FAQs" className="mainBtn2">
              let's start
            </a>
          </div>
        </div>
        <div className="serviceBtn">
          <Link to="/Portfolio" className="mainBtn1">
            Visit our Portfolio
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
