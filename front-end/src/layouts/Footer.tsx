import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { SiFacebook } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Footer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='footer'>
      <div className="footerWrapper">
          <div className='summaryDiv'>
            <h4 style={{paddingBottom: '20px', color: '#7E7D32'}}>Maui Land Broker & Property Management</h4>
            <p>We here at MLB strive to keep the culture of Maui alive and well. Our roots run deep here and we want nothing more than to preserve the communities of Maui that have been here for a long time.</p>
          </div>
          <div className='otherLinksCol'>
            <h4 style={{color: '#7E7D32'}}>Other Links</h4>
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
          </div>
          <div className='iconsAndPhoneDiv'>
            <div className='phoneSection'>
              <a href='#'>
                <div style={{paddingRight: '0'}} className='social-icon'>
                  <MdOutlinePhoneIphone />
                </div>
              </a>
              <h4>Call Us Today! (808)442-3036</h4>
            </div>
            <div className="email">
              <button style={{backgroundColor: '#3B2313'}} onClick={handleShow}>
                <div style={{paddingRight: '10px'}} className="social-icon">
                  <MdOutlineEmail />
                </div>
              </button>
              <h4>sales@mauilandbroker.com</h4>
              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>sales@mauilandbroker.com</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form className="contactForm">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name"></input>

                      <label htmlFor="subject">Subject:</label>
                      <input type="text" id="subject" name="subject"></input>

                      <label htmlFor="message">Message:</label>
                      <textarea id="message" name="message"/>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Send Message
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
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
            </div>
          </div>
          <div className="location">
            <h4><MdOutlineLocationOn /> 104 N. Market St. Wailuku, HI 96793</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5656252104063!2d-156.50498312480417!3d20.889551380725173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d36a70467cfb%3A0xf60fb39b11c5c07a!2sMaui%20Land%20Broker%20And%20Property%20Management%20Inc!5e0!3m2!1sen!2sus!4v1689807358563!5m2!1sen!2sus" width="430" height="300" loading="lazy"></iframe>
          </div>
      </div>
      <p className='copyright'>© 2023 | Maui Land Broker All Rights Reserved</p>
    </div>
  )
}

export default Footer;