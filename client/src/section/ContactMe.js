import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { domain } from "../utils/stn";

const ContactMe = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const respons = await fetch(`${domain}/api/message/addMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        subject,
        message,
      }),
    });

    const data = await respons.json();

  };

  return (
    <section className="contactMe" id="Contact">
      <Container className="contactMeContainer">
        <div className="ContactInfo" 
        
     >
          <div>
            <h6 className="sectionTitle">- Contact us</h6>
            <h1 className="mainTitle">
              Lit’s connect & <br />
              collaborate
            </h1>
            <p className="mainParagraph">Our official accounts to with us</p>
          </div>

          <div className="infoHolder">
            <div className="infoBox">
              <div>
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/sjpyphsk.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                  >
              </lord-icon>
              </div>
              <h2>+213 ( 111 - 222 - 333 )</h2>
            </div>

            <div className="infoBox">
              <div>

              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/acydszgh.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                  >
              </lord-icon>

              </div>
              <h2>abdelhadikaba64@</h2>
            </div>
            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/cjhlqtae.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                Location Algeria - Algeria <br />
                <span>(UTC+01:00) </span>
              </h2>
            </div>
            <div className="infoBox">
              <div>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/amjaykqd.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h2>
                official accounts <br />
                <span>
                  <a
                    target="blank"
                    href="https://www.instagram.com/acos.ag/?hl=ar"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    target="blank"
                    href="https://www.facebook.com/profile.php?id=100091746498169"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/a-cos-701331300/"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ContactForm">
          <form onSubmit={submitHandler}>
            <div>
              <input
                className="mainForm"
                required
                type="text"
                id="firstName"
                name="firstName"
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="First Name"
              />

              <input
                className="mainForm"
                required
                type="text"
                id="LastName"
                name="lastName"
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                className="mainForm"
                required
                type="email"
                id="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="mainForm"
                required
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => setphoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                className="mainForm1"
                required
                type="text"
                id="subject"
                name="subject"
                onChange={(e) => setsubject(e.target.value)}
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="mainForm2"
                required
                type="text"
                id="message"
                name="message"
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Message"
              />
            </div>
            <button className="mainBtn1" type="submit">
              {" "}
              Send Your Message <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
