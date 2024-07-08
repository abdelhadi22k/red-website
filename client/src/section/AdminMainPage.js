import axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../utils/stn";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminMainPage = () => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/message`);
        setMessage(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []); 

  return (
    <section id="blog" className="blog">
      <Container className="blogContainer">
        <div className="blogInfo">
          <h6 className="sectionTitle">- blog</h6>
          <h1 className="mainTitle">
            Form my <span>blog</span> post
          </h1>
          <p className="mainParagraph">
            Watch the latest developments in the world of building and
            developing modern albums and the latest developments in interface
            design and user experience exclusively on our blog.
          </p>

          <div className="mainBtn">
            <Link to="/Blog" className="mainBtn1">
              View all Blog <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <a href="#FAQs" className="mainBtn4">
              Contact us
            </a>
          </div>
        </div>

        <div className="MessageHolder">
          {message.map((message, index) => {
            return (
              <div className="messageBox"> 

                <h6> <span>First Name:</span>  {message.firstName}   </h6>

                <h6> <span>Last Name:</span>  {message.lastName}   </h6>

                <h6> <span>Message Subject:</span>  {message.subject}</h6>

                <h6> <span>Message:</span>  {message.message}</h6>

                <h6> <span>Email:</span>  {message.email}</h6>
                
                <h6> <span>Phone Number:</span>  {message.phoneNumber}</h6>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AdminMainPage;
