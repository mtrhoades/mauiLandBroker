import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MLBlogo from '../assets/images/MLBlogo.png';

function NavigationBar() {
  return (
    <>
      <Navbar bg='primary' variant='light' fixed='top'>
        <Container>
          <Navbar.Brand href='./'>
            <img src={MLBlogo}></img>
          </Navbar.Brand>
          <Nav style={{fontWeight: 'bold', fontSize: '20px'}}>
            <Nav.Link href='./about'>About Us</Nav.Link>
            <Nav.Link href='./propertysearch'>Property Search</Nav.Link>
            <Nav.Link href='./associations'>Associations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
