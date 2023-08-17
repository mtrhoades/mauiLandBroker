import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import josephPhoto from '../assets/images/Joseph.jpg';
import sashaPhoto from '../assets/images/Sasha.jpg';
import hawanaPhoto from '../assets/images/Hawana.jpg';
import arielPhoto from '../assets/images/Ariel.jpg';
import shirleyPhoto from '../assets/images/Shirley.jpg';

const About = () => {

const [isFlipped1, setIsFlipped1] = useState(false);
const [isFlipped2, setIsFlipped2] = useState(false);
const [isFlipped3, setIsFlipped3] = useState(false);
const [isFlipped4, setIsFlipped4] = useState(false);
const [isFlipped5, setIsFlipped5] = useState(false);

const flipCard1 = () => {
  setIsFlipped1(!isFlipped1);
}
const flipCard2 = () => {
  setIsFlipped2(!isFlipped2);
}
const flipCard3 = () => {
  setIsFlipped3(!isFlipped3);
}
const flipCard4 = () => {
  setIsFlipped4(!isFlipped4);
}
const flipCard5 = () => {
  setIsFlipped5(!isFlipped5);
}



// trim off ariels photo!!!!!!!!!!!!!!!!!!!!! do it now!!!!!!!!!!!! fix the stupid lapover!!!!!!!!!!!! 


  return (
    <div className="agentsWrapper">

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
        <div className="card card-front" onClick={flipCard1}>
          <img src={josephPhoto}></img>
          <h3>Joseph Blackburn</h3>
          <h5>Co-Owner</h5>
          <h5>Broker/Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard1}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
        <div className="card card-front" onClick={flipCard2}>
          <img src={shirleyPhoto}></img>
          <h3>Shirley Blackburn</h3>
          <h5>Co-Owner</h5>
        </div>
        <div className="card card-back" onClick={flipCard2}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>
        <div className="card card-front" onClick={flipCard3}>
          <img id="arielImg" src={arielPhoto}></img>
          <h3>Ariel Blackburn-Rhoades</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard3}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped5}>
        <div className="card card-front" onClick={flipCard5}>
          <img src={sashaPhoto}></img>
          <h3>Sasha Haukoloa</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard5}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped4}>
        <div className="card card-front" onClick={flipCard4}>
          <img src={hawanaPhoto}></img>
          <h3>Hawana Blackburn</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard4}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

    </div>
  )
}

export default About;