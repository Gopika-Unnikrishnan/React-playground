import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from "react-router-dom"
import "./style.css"
const NavBar =() => {
    const navigate = useNavigate()
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className='ammu_super' onClick={()=>navigate("/")}>Ammu's Playground</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={()=>navigate("/about")}>About</Nav.Link>
                <Nav.Link onClick={()=>navigate("/sign-up")}>Signup</Nav.Link>
                <Nav.Link onClick={()=>navigate("/sign-in")}>Signin</Nav.Link>
                <NavDropdown className="justify-content-end" title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item href="/logout">
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default NavBar