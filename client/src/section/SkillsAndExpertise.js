import { Container } from "react-bootstrap";

const SkillsAndExpertise = () => {
  return (
    <div className="SkillsEndExperience" id="Skills">
      <Container className="SkillsEndExperienceContainer">
        <div className="skills">
          <h6 className="sectionTitle">
            -Skills &<br />
            Experience
          </h6>
          <h1 className="mainTitle">Learn about our Skills & Experience</h1>
          <p className="mainParagraph">
          Learn from our skills and experiences to get a better idea about us
          </p>

          <div className="mainBtn">
            <a href="#FAQs" className="mainBtn3">
            Learn More
            </a>
            <a href="#Contact" className="mainBtn2">
               Let's Start
            </a>
          </div>
          <h4 className="sectionTitle">Skills</h4>

          <div className="skillHolder">
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/bvymuvni.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span> UX Design</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/dqrpfjei.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>UI Design</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/tcqjuymo.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>Wireframe</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/nmguxqka.json"
                  trigger="hover"
                  state="hover-squeeze"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>Prototype</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/ffoywhrm.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>FullStack</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/kgwqxfas.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>Front-End</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/pgveulug.json"
                  trigger="hover"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>Back-End</span>
            </div>
            <div
              className="skillTitle"
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/jtkfemwz.json"
                  trigger="morph"
                  state="morph-check"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "70px", height: "70px" }}
                ></lord-icon>
              </div>

              <span>SEO</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h4 className="sectionTitle"> Experience </h4>

          <div className="line"></div>
          <div
            className="experienceBox"
            

          >
            <span>2021 - Present</span>
            <div>
              <h2 className="mainTitle">Web Developer</h2>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div
            className="experienceBox"
          >
            <span>2021 - Present</span>
            <div>
              <h2 className="mainTitle">UIUX Designer</h2>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div
            className="experienceBox"
          >
            <span>2022 - Present</span>
            <div>
              <h2 className="mainTitle">SEO</h2>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div
            className="experienceBox"
          >
            <span>2021 - Present</span>
            <div>
              <h2 className="mainTitle">+60 Completed project </h2>
              <span>Freelancer</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillsAndExpertise;
