import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {


return (

    <div className="wrapper">
        
        <div className="cardIcon">
            <FontAwesomeIcon className='icons' icon={faSignHanging}></FontAwesomeIcon>
            <h5>Buy/Sell With Us</h5>
        </div>

        <div className="cardIcon">
            <FontAwesomeIcon className='icons' icon={faKey}></FontAwesomeIcon>
            <h5>Rent With Us</h5>
        </div>

        <div className="cardIcon">
            <FontAwesomeIcon className='icons' icon={faCalculator}></FontAwesomeIcon>
            <h5>Mortgage Calculator</h5>
        </div>

        <div className="cardIcon">
            <FontAwesomeIcon className='icons' icon={faHouse}></FontAwesomeIcon>
            <h5>HOA Information & Documents</h5>
        </div>

        <div className="cardIcon">
            <FontAwesomeIcon className='icons' icon={faHouseUser}></FontAwesomeIcon>
            <h5>Something Else</h5>
        </div>

    </div>
  )
}

export default Cards;