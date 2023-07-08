import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
// import { SocialIcon } from 'react-social-icons';
import { SiFacebook } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Contact = () => {

const bgStyle = {backgroundColor: "#FAFAFA", color: "#3B2313"}

  return (
    <div className="contact contactContainer">
        <h2 style={bgStyle}>Contact Us</h2>
        <div className="contact contactItems">
            <div className="contact firstContactItems">
                <div className="contact phone">
                    <MdOutlinePhoneIphone style={bgStyle}/> (808) 442-3063
                </div>
                <div className="contact email">
                    <MdOutlineEmail style={bgStyle}/> sales@mauilandbroker.com
                </div>
                <div className="contact location">
                    <MdOutlineLocationOn style={bgStyle}/> 104 N. Market Street Wailuku, HI 96793
                </div>
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
        </div>
    </div>
  )
}

export default Contact;