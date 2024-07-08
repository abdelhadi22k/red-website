import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavProject from "../components/product/NavProject";
import Project from "../components/Project";
import { Link } from "react-router-dom";
import axios from "axios";
import { domain } from "../utils/stn";
import LoadingProject from "../components/loading/LoadingProject";

const Portfolio = () => {

  const [Category, setCategory] = useState([]);
  const [project, setProject] = useState([]);
  const [data, setData] = useState([]);  // Initialize data state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategory() { 
      try {
        const { data } = await axios.get(`${domain}/api/project/categories`);
        setCategory(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchCategory();
  }, []);

  const allCategory = ["All", ...Category];

  const category = (cat) => {
    if (cat === "All") {
      setData(project);  // Set data to all projects
    } else {
      const newArray = project.filter((element) => element.category === cat);
      setData(newArray);
    }
  };



  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await axios.get(`${domain}/api/project`);
        setProject(data);
        setData(data);  // Set data to all projects initially
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchProject();
  }, []);

  
  return  (
    <div className="Portfolio" id="Portfolio">
      <div className="PortfolioNav">
        <Container className="PortfolioNavContainer">
          <Link to="/" className="mainBtnBack">
            Back To Home Page
          </Link>
        </Container>
      </div>
      <Container className="project">
        <div className="projectContainer">
          <div className="projectNavbar">
            <NavProject
              showCategory={category}
              allCat={allCategory}
            ></NavProject>
          </div>
          <div className="projectHolder">
            <Project project={data}></Project>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
