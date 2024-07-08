import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SoloBlogPage from "../components/blog/SoloBlogPage";
import axios from "axios";
import { domain } from "../utils/stn";
import NavBlog from "../components/blog/NavBlog";
import { Link } from "react-router-dom";
import LoadingProject from "../components/loading/LoadingProject";

const BlogPage = () => {
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
    <LoadingProject/>
  ) : error ? (
    <h1>{error}</h1> 
  ) : (
    <div className="blogPage">
    <Container>
    <NavBlog />
    <Link className='mainBtnBack' to='/'>Back To Home Page</Link>
      </Container>
      <Container>
        <SoloBlogPage blog={blog} />
      </Container>
    </div>
  );
};

export default BlogPage;
