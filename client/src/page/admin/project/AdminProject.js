

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { domain } from "../../../utils/stn";
import NavProject from "../../../components/product/NavProject";
import AdminProjectD from "../../../components/product/AdminProjectD";

const AdminProject = () => {
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

  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
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
            <Link to="/Admin-acos-12333" className="mainBtn1">
             Go Back
            </Link>
            <Link to="/Admin-acos-12333/add-project-24234" className="mainBtn1">
             Add Project
            </Link>

          </div>
        </div>

        <div className="projectContainer">
          <div className="projectNavbar">
            <NavProject showCategory={category} allCat={allCategory}></NavProject>
          </div>
          <div className="projectHolder">
            <AdminProjectD project={data}></AdminProjectD>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminProject;
