import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import forSaleIcon from '../assets/images/forSaleIcon.png';
import forRentIcon from '../assets/images/forRentIcon.png';
import calculatorIcon from '../assets/images/calculatorIcon.png';
import hoaIcon from '../assets/images/hoaIcon.png';


const Cards = () => {
  return (
    <div className="cardContainer">
        <div className="cardGroup">
            <Card className="cardCustom">
                <Card.Img variant="top" src={forSaleIcon} alt="house for sale" />
                <Card.Body>
                    <Card.Title>List With Us</Card.Title>
                </Card.Body>
            </Card>
            <Card className="cardCustom">
                <Card.Img variant="top" src={forRentIcon} />
                <Card.Body>
                    <Card.Title>Rent With Us</Card.Title>
                </Card.Body>
            </Card>
            <Card className="cardCustom">
                <Card.Img variant="top" src={calculatorIcon} />
                <Card.Body>
                    <Card.Title>Mortgage Calculator</Card.Title>
                </Card.Body>
            </Card>
            <Card className="cardCustom">
                <Card.Img variant="top" src={hoaIcon} />
                <Card.Body>
                    <Card.Title>HOA Information</Card.Title>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Cards;