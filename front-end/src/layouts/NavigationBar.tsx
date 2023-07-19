import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MLBlogo from '../assets/images/MLBlogo.png';


function NavigationBar() {

  return (
    <>
      <Navbar expand="lg" className="navBar" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img alt="logo" src={MLBlogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 fs-4"
              style={{ maxHeight: '100px', paddingLeft: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/agents">Agents</Nav.Link>

              <NavDropdown title="Associations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/associations">Hale Kaiola</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Koa Kai</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Kualono</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Kulamalu Hilltop</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Liholani Golf Villas</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Maluhia Country Ranches</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Pu'uone Terrace</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Wailuku Country Estates</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Waiolani Elua</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Waiolani Mauka</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Wailuku Parkside</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Waikapu Gardens</NavDropdown.Item>
                <NavDropdown.Item href="/associations">Waiale Elua</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/associations">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Listings" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/listings">Listing # 1</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 2</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 3</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 4</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 5</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 6</NavDropdown.Item>
                <NavDropdown.Item href="/listings">Listing # 7</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/listings">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Rentals" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/rentals">Rental Information</NavDropdown.Item>
                <NavDropdown.Item href="/rentals">Available Rentals</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/rentals">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className='header'>
              <h5>A full service real estate sales and management company</h5>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
