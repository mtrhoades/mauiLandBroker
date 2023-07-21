import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import forSaleIcon from '../assets/images/forSaleIcon.png';
import forRentIcon from '../assets/images/forRentIcon.png';
import calculatorIcon from '../assets/images/calculatorIcon.png';
import hoaIcon from '../assets/images/hoaIcon.png';
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';


const Cards = () => {

const [flipCard1, setFlipCard1] = useState(false);
const [flipCard2, setFlipCard2] = useState(false);
const [flipCard3, setFlipCard3] = useState(false);
const [flipCard4, setFlipCard4] = useState(false);

const navigate = useNavigate()
const cardClick = () => {
    navigate('/listings');
}

  return (
    <div className="cardContainer">
        <div className="cardGroup">
            
            <div className="cardCustom" onClick={cardClick}>
                <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard1}>
                    <div className="cardFront" onMouseEnter={() => setFlipCard1(true)}>
                        <Card.Img variant="top" src={forSaleIcon} alt="house for sale" />
                        <Card.Body>
                            <Card.Title>Buy & Sell With Us</Card.Title>
                        </Card.Body>
                    </div>
                    <div className="cardBack" onMouseLeave={() => setFlipCard1(false)}>
                        <h1>Back</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="cardCustom">
                <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard2}>
                    <div className="cardFront" onMouseEnter={() => setFlipCard2(true)}>
                        <Card.Img variant="top" src={forRentIcon} />
                        <Card.Body>
                            <Card.Title>Rent With Us</Card.Title>
                        </Card.Body>
                    </div>
                    <div className="cardBack" onMouseLeave={() => setFlipCard2(false)}>
                        <h1>Back</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="cardCustom">
                <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard3}>
                    <div className="cardFront" onMouseEnter={() => setFlipCard3(true)}>
                        <Card.Img variant="top" src={calculatorIcon} />
                        <Card.Body>
                            <Card.Title>Mortgage Calculator</Card.Title>
                        </Card.Body>
                    </div>
                    <div className="cardBack" onMouseLeave={() => setFlipCard3(false)}>
                        <h1>Back</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="cardCustom">
                <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard4}>
                    <div className="cardFront" onMouseEnter={() => setFlipCard4(true)}>
                        <Card.Img variant="top" src={hoaIcon} />
                        <Card.Body>
                            <Card.Title>HOA Information & Documents</Card.Title>
                        </Card.Body>
                    </div>
                    <div className="cardBack" onMouseLeave={() => setFlipCard4(false)}>
                        <h1>Back</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    </div>
  )
}

export default Cards;