import forSaleIcon from '../assets/images/forSaleIcon.png';
import forRentIcon from '../assets/images/forRentIcon.png';
import calculatorIcon from '../assets/images/calculatorIcon.png';
import hoaIcon from '../assets/images/hoaIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {


return (

    <div className="wrapper">
        
        <div className="card">
            <FontAwesomeIcon className='icons' icon={faSignHanging}></FontAwesomeIcon>
            <h5>Buy/Sell With Us</h5>
        </div>

        <div className="card">
            <FontAwesomeIcon className='icons' icon={faKey}></FontAwesomeIcon>
            <h5>Rent With Us</h5>
        </div>

        <div className="card">
            <FontAwesomeIcon className='icons' icon={faCalculator}></FontAwesomeIcon>
            <h5>Mortgage Calculator</h5>
        </div>

        <div className="card">
            <FontAwesomeIcon className='icons' icon={faHouse}></FontAwesomeIcon>
            <h5>HOA Information & Documents</h5>
        </div>

        <div className="card">
            <FontAwesomeIcon className='icons' icon={faSignHanging}></FontAwesomeIcon>
            <h5>Something Else</h5>
        </div>






        {/* <div id="singleCard1" className="single-card">
            <div className="front">
                <img src={forSaleIcon}></img>
                <h5>Buy & Sell With Us</h5>
            </div>
            <div className="back">
                <div className="content">
                    <h2>Mark Jones</h2>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                </div>
            </div>
        </div>

        <div id="singleCard2" className="single-card">
            <div className="front">
                <img src={forRentIcon}></img>
                <h5>Rent With Us</h5>
            </div>
            <div className="back">
                <div className="content">
                    <h2>Mark Jones</h2>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                </div>
            </div>
        </div>

        <div id="singleCard3" className="single-card">
            <div className="front">
                <img src={calculatorIcon}></img>
                <h5>Mortgage Calculator</h5>
            </div>
            <div className="back">
                <div className="content">
                    <h2>Mark Jones</h2>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                </div>
            </div>
        </div>

        <div id="singleCard4" className="single-card">
            <div className="front">
                <img src={hoaIcon}></img>
                <h5>HOA Information & Documents</h5>
            </div>
            <div className="back">
                <div className="content">
                    <h2>Mark Jones</h2>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                </div>
            </div>
        </div> */}

    </div>
  )
}

export default Cards;