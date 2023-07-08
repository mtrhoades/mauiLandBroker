import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MLBlogo from '../assets/images/MLBlogo.png';
import { SiFacebook } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';


function NavigationBar() {

  const bgStyle = {backgroundColor: "#FAFAFA", color: "#3B2313"}

  return (
    <>
      <Navbar style={{paddingLeft: '20px'}} expand="lg" className=" navBar bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img alt="logo" src={MLBlogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 fs-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/agents">Agents</Nav.Link>

              <NavDropdown title="Associations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className='header'>
              <h2>Call Us Today! (808)442-3036</h2>
              <h5>A full service real estate sales and management company</h5>
            </div>
            <div className="contact secondContactItems">
              <div className="contact facebook">
                <a href="https://www.facebook.com/MauiLandBroker/">
                  <button>
                    <SiFacebook style={bgStyle}/> 
                  </button>
                </a>
              </div>
              <div className="contact instagram">
                <button>
                  <FiInstagram style={bgStyle}/>
                </button>
              </div>
              <div className="contact twitter">
                <button>
                  <FiTwitter style={bgStyle}/>
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
