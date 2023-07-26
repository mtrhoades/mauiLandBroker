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

    // <div className="cardContainer">
    //     <div className="cardGroup">
    //         <div className="cardCustom" onClick={cardClick}>
    //             <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard1}>
    //                 <div className="cardFront" onMouseOver={() => setFlipCard1(true)}>
    //                     <Card.Img variant="top" src={forSaleIcon} alt="house for sale" />
    //                     <Card.Body>
    //                         <Card.Title>Buy & Sell With Us</Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="cardBack" onMouseLeave={() => setFlipCard1(false)}>
    //                     <h1>Back</h1>
    //                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
    //                 </div>
    //             </ReactCardFlip>
    //         </div>
    //         <div className="cardCustom">
    //             <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard2}>
    //                 <div className="cardFront" onMouseOver={() => setFlipCard2(true)}>
    //                     <Card.Img variant="top" src={forRentIcon} />
    //                     <Card.Body>
    //                         <Card.Title>Rent With Us</Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="cardBack" onMouseLeave={() => setFlipCard2(false)}>
    //                     <h1>Back</h1>
    //                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
    //                 </div>
    //             </ReactCardFlip>
    //         </div>
    //         <div className="cardCustom">
    //             <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard3}>
    //                 <div className="cardFront" onMouseOver={() => setFlipCard3(true)}>
    //                     <Card.Img variant="top" src={calculatorIcon} />
    //                     <Card.Body>
    //                         <Card.Title>Mortgage Calculator</Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="cardBack" onMouseLeave={() => setFlipCard3(false)}>
    //                     <h1>Back</h1>
    //                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
    //                 </div>
    //             </ReactCardFlip>
    //         </div>
    //         <div className="cardCustom">
    //             <ReactCardFlip flipDirection='horizontal' isFlipped={flipCard4}>
    //                 <div className="cardFront" onMouseOver={() => setFlipCard4(true)}>
    //                     <Card.Img variant="top" src={hoaIcon} />
    //                     <Card.Body>
    //                         <Card.Title>HOA Information & Documents</Card.Title>
    //                     </Card.Body>
    //                 </div>
    //                 <div className="cardBack" onMouseLeave={() => setFlipCard4(false)}>
    //                     <h1>Back</h1>
    //                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dicta molestias molestiae fuga qui a pariatur</p>
    //                 </div>
    //             </ReactCardFlip>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Cards;