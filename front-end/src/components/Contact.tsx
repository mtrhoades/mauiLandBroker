import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LuFacebook } from 'react-icons/lu';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="contact contactContainer">
        <h2>Contact Us</h2>
        <div className="contact contactItems">
            <div className="contact firstContactItems">
                <div className="contact phone">
                    <MdOutlinePhoneIphone /> (808) 442-3063
                </div>
                <div className="contact email">
                    <MdOutlineEmail /> sales@mauilandbroker.com
                </div>
                <div className="contact location">
                    <MdOutlineLocationOn /> 104 N. Market Street Wailuku, HI 96793
                </div>
            </div>
            <div className="contact secondContactItems">
                <div className="contact facebook">
                    <LuFacebook /> 
                </div>
                <div className="contact instagram">
                    <FiInstagram />
                </div>
                <div className="contact twitter">
                    <FiTwitter />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;