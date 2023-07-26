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
        <Row style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline', marginLeft: '-500px'}} className='text-center text-md-start'>
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <h4 style={{paddingBottom: '20px', color: '#7E7D32'}}>Maui Land Broker & Property Management</h4>
            <p>We here at MLB strive to keep the culture of Maui alive and well. Our roots run deep here and we want nothing more than to preserve the communities of Maui that have been here for a long time.</p>
          </Col>
          <Col lg={3} md={6} sm={12} className='mb-3 otherLinksCol'>
            <h5 style={{color: '#7E7D32'}}>Other Links</h5>
            <div style={{height: '20px'}}></div>
            <ul>
              <li>
                <a href='#'>Kama'āina Buyer/Seller 
                Specials</a>{" "}
              </li>
              <li>
                <a href='#'>Something Else</a>
              </li>
              <li>
                <a href='#'>Something Else</a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-3 iconsAndPhoneDiv'>
            <div className='phoneSection'>
              <h2>Call Us Today! (808)442-3036</h2>
              <MdOutlinePhoneIphone />
            </div>
            <div className='socialIconsDiv'>
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
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <div className="location">
              <h5><MdOutlineLocationOn /> 104 N. Market St. Wailuku, HI 96793</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5656252104063!2d-156.50498312480417!3d20.889551380725173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d36a70467cfb%3A0xf60fb39b11c5c07a!2sMaui%20Land%20Broker%20And%20Property%20Management%20Inc!5e0!3m2!1sen!2sus!4v1689807358563!5m2!1sen!2sus" width="400" height="300" loading="lazy"></iframe>
            </div>
          </Col>
        </Row>
        <p className='copyright text-center text-md-start'>© 2023 | Maui Land Broker All Rights Reserved</p>
      </Container>
    </div>
  )
}

export default Footer;