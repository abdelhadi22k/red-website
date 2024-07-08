import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavProject from "../components/product/NavProject";
import Project from "../components/product/Project";
import { domain } from "../utils/stn";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingProject from "../components/loading/LoadingProject";

const Projects = () => {
  const [Category, setCategory] = useState([]);
  const [project, setProject] = useState([]);
  const [data, setData] = useState([]); // Initialize data state
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
      setData(project); // Set data to all projects
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
        setData(data); // Set data to all projects initially
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchProject();
  }, []);

  return (
    <div className="projectSection" id="Project">
      <Container className="project">
        <div className="projectInfo">
          <h6 className="sectionTitle">- Project</h6>
          <h1 className="mainTitle">
            Take a look at some
            <br /> of our <span>past work</span>
          </h1>
          <p className="mainParagraph">
            Take a look at the work our team has been working on recently
          </p>

          <div className="mainBtn">
            <Link to="/Portfolio" className="mainBtn1">
              Visit our Portfolio
            </Link>
            <a href="#Contact" className="mainBtn4">
              let's start
            </a>
          </div>
        </div>

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

export default Projects;
