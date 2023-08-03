import forSaleIcon from '../assets/images/forSaleIcon.png';
import forRentIcon from '../assets/images/forRentIcon.png';
import calculatorIcon from '../assets/images/calculatorIcon.png';
import hoaIcon from '../assets/images/hoaIcon.png';
import { useNavigate } from 'react-router-dom';


const Cards = () => {


const navigate = useNavigate()
const cardClick = () => {
    navigate('/listings');
}

return (

    <div className="wrapper">

        <div id="singleCard1" className="single-card">
            <div className="front">
                <img src={forSaleIcon}></img>
                <h4>Buy & Sell With Us</h4>
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
                <h4>Rent With Us</h4>
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
                <h4>Mortgage Calculator</h4>
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
                <h4>HOA Information & Documents</h4>
            </div>
            <div className="back">
                <div className="content">
                    <h2>Mark Jones</h2>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed, aliquam reiciendis odio, labore quod itaque.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards;