import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {

  return (
    <div className="contact contactContainer">
        <h2>Contact Us</h2>
        <div className="contactBottom contactItems">
            <div className="contactBottom firstContactItems">
                {/* <div className="contactBottom phone">
                    <MdOutlinePhoneIphone /> (808) 442-3063
                </div> */}
                <div className="contactBottom email">
                    <MdOutlineEmail /> sales@mauilandbroker.com
                </div>
                <div>

                </div>
                <div className="contactBottom location">
                    <MdOutlineLocationOn /> 104 N. Market Street Wailuku, HI 96793
                </div>
            </div>
        </div>
        <form className="contactForm">
            {/* <div className="contactEmail"> */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"></input>
            {/* </div> */}
            {/* <div className="contactName"> */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"></input>
            {/* </div> */}
            {/* <div className="contactSubject"> */}
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject"></input>
            {/* </div> */}
            {/* <div className="contactMessage"> */}
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"/>
            {/* </div> */}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact;