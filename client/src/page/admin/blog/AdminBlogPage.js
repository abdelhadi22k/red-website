

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import SoloAdminBlogPage from "../../../components/blog/adminBlog/SoloAdminBlogPage";
import { domain } from "../../../utils/stn";
import { Link } from "react-router-dom";

const AdminBlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { 
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <div className="blogPage">

      <Container>
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
        <Link to="/Admin-acos-12333/add_Blog-23423235" className="mainBtn1">
          add blog <i className="fa-solid fa-arrow-right"></i>
        </Link>

     
      </div>
    </div>
      </Container>

      <Container>
        <SoloAdminBlogPage blog={blog}/>
      </Container>
    </div>
  );
};

export default AdminBlogPage;
