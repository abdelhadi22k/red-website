import { Container, Image } from "react-bootstrap";

const MainPage = () => {
  return (
    <section id="home" className="home">
      <Container className="homeContainer">
        <div className="infoSection">
          <div className="mainHomeInfo1">
            <h1 className="mainTitle">
              Create your own amazing  <span>website</span> or web application
            </h1>
            <p className="mainParagraph">
              acos is here to help you. We have years of experience in designing
              websites
            </p>

            <div className="mainBtn">
              <a href="#Contact" className="mainBtn1">
                let's start
              </a>
              <a href="#FAQs" className="mainBtn2">
                learn more
              </a>
            </div>
          </div>

          <div className="mainHomeInfo2">
            <div className="homeInfoBox1">
              <h3 className="sectionTitle">Experience </h3>
              <span>+3</span>
              <div></div>

              <p className="mainParagraph">
                We have more than 3 years experience designing user experiences
                & interfaces, as well as developing and programming websites and
                web applications
              </p>
            </div>

            <div className="homeInfoBox2">
              <h3 className="sectionTitle">Completed projects </h3>
              <span>+60</span>
              <div></div>
              <p className="mainParagraph">
                Our team worked on many projects in the field of programming and
                developing websites and web applications, as well as UIUX
                designs
              </p>
            </div>
          </div>
        </div>

        <div className="homeImg">
          <Image
            loading="lazy"
            alt="homeImg"
            src="sources/img/homepage.png"
            fluid
          />
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
