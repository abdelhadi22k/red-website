import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function AdminNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand>
                    <Link
                        className="mainLink"
                        to="/Admin-acos-12333"
                    >
                        <img alt="logoBrand" src="sources/svg/main logo w 3.svg"></img>
                    </Link>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
                    <Nav className="linkContainer">

                        <Link className="mainLink" to="/Admin-acos-12333/AdminProject-35345">
                           project <div></div>{" "}
                        </Link>
                        <Link className="mainLink" to="/Admin-acos-12333/AdminBlog-2352355">
                             Blog Post<div></div>{" "}
                        </Link>
                        <Link className="mainLink" to="/Admin-acos-12333/AdminAddOpinions-84620347">
                        Add Opinions<div></div>{" "}
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminNavBar;
