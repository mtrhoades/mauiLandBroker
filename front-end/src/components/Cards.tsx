import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import forSaleIcon from '../assets/images/forSaleIcon.png';
import forRentIcon from '../assets/images/forRentIcon.png';
import calculatorIcon from '../assets/images/calculatorIcon.png';
import hoaIcon from '../assets/images/hoaIcon.png';

import leafBgImg from '../assets/images/palmImg.png';

const Cards = () => {
  return (
    <div className="cardContainer">
        <CardGroup className="cardGroup">
            <Card className="cardCustom">
                <Card.Img variant="top" src={forSaleIcon} alt="house for sale" />
                <Card.Body>
                    <Card.Title>List With Us</Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text> */}
                </Card.Body>
            </Card>
            <div className="inbetween"></div>
            <Card className="cardCustom">
                <Card.Img variant="top" src={forRentIcon} />
                <Card.Body>
                    <Card.Title>Rent With Us</Card.Title>
                    {/* <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text> */}
                </Card.Body>
            </Card>
            <div className="inbetween"></div>
            <Card className="cardCustom">
                <Card.Img variant="top" src={calculatorIcon} />
                <Card.Body>
                    <Card.Title>Mortgage Calculator</Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text> */}
                </Card.Body>
            </Card>
            <div className="inbetween"></div>
            <Card className="cardCustom">
                <Card.Img variant="top" src={hoaIcon} />
                <Card.Body>
                    <Card.Title>HOA Information</Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </CardGroup>
    </div>
  )
}

export default Cards;