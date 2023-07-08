import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {

  return (
    <div className="contact contactContainer">
        <h2>Contact Us</h2>
        <div className="contactBottom contactItems">
            <div className="contactBottom firstContactItems">
                <div className="contactBottom phone">
                    <MdOutlinePhoneIphone /> (808) 442-3063
                </div>
                <div className="contactBottom email">
                    <MdOutlineEmail /> sales@mauilandbroker.com
                </div>
                <div className="contactBottom location">
                    <MdOutlineLocationOn /> 104 N. Market Street Wailuku, HI 96793
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;