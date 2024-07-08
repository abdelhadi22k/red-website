import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SoloBlog from "../components/blog/SoloBlog";
import axios from "axios";
import { domain } from './../utils/stn';
import Loading from "../components/loading/LoadingBlog";

const Blog = () => {


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



  return ( 
    <section id="blog" className="blog">
      <Container className="blogContainer">
        <div className="blogInfo">
          <h6 className="sectionTitle">- blog</h6>
          <h1 className="mainTitle">
            Form my <span>blog</span> post
          </h1>
          <p className="mainParagraph">
          Watch the latest developments in the world of building 
          and developing modern websites and the latest developments 
          in interface design and user experience (UIUX) exclusively 
          on our blog.
          </p>

          <div className="mainBtn">
            <Link to="/Blog" className="mainBtn1">
              View all Blog <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <a href="#Contact" className="mainBtn4">
              Contact us
            </a>
          </div>
        </div>

        <div className="blogHolder">
          {
            loading ? (
              <Loading />
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              <SoloBlog blog={blog.slice(0, 3)}></SoloBlog>
            )
          } 
        </div>

      </Container>
    </section>
  );
};
export default Blog;
