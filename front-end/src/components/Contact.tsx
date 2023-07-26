import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {

  return (
    <div className="contactContainer">
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="email">
                <MdOutlineEmail /> sales@mauilandbroker.com
            </div>
            <form className="contactForm">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"></input>

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject"></input>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"/>
                <button type="submit">Submit</button>
            </form>
        </div>

        {/* <div className="location">
            <h5><MdOutlineLocationOn /> 104 N. Market St. Wailuku, HI 96793</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5656252104063!2d-156.50498312480417!3d20.889551380725173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d36a70467cfb%3A0xf60fb39b11c5c07a!2sMaui%20Land%20Broker%20And%20Property%20Management%20Inc!5e0!3m2!1sen!2sus!4v1689807358563!5m2!1sen!2sus" width="600" height="350" loading="lazy"></iframe>
        </div> */}

    </div>
  )
}

export default Contact;