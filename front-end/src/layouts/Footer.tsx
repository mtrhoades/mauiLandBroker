import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { SiFacebook } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';


const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='text-center text-md-start'>
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='logo'>
                <h4>Career Plan Today</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                We believe in your potential and are committed to helping you achieve your career and financial goals. Together, let's create a bright
                future filled with wellness and success.
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='footer-link-heading'>
                <p>Quick Links</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>Home</a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>About Us</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>Contact Us</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='footer-link-heading'>
                <p>Other Links</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>Terms</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='#'>Feedback</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}} className='socialIconsDiv'>
              <a href='#'>
                <div className='social-icon'>
                  <SiFacebook />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <FiInstagram />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <FiTwitter />
                </div>
              </a>
              <a href='#'>
                <div className='social-icon'>
                  <MdOutlineEmail />
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <p className='copyright text-center text-md-start'>© 2023 | Career Plan Today All Rights Reserved</p>
      </Container>
    </div>
  )
}

export default Footer;