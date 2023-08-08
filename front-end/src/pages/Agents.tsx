import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const About = () => {

const [isFlipped1, setIsFlipped1] = useState(false);
const [isFlipped2, setIsFlipped2] = useState(false);
const [isFlipped3, setIsFlipped3] = useState(false);
const [isFlipped4, setIsFlipped4] = useState(false);

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

  return (
    <div className="agentsWrapper">

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
        <div className="card card-front" onClick={flipCard1}>
          <h3>Front</h3>
        </div>
        <div className="card card-back" onClick={flipCard1}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
        <div className="card card-front" onClick={flipCard2}>
          <h3>Front</h3>
        </div>
        <div className="card card-back" onClick={flipCard2}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>
        <div className="card card-front" onClick={flipCard3}>
          <h3>Front</h3>
        </div>
        <div className="card card-back" onClick={flipCard3}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped4}>
        <div className="card card-front" onClick={flipCard4}>
          <h3>Front</h3>
        </div>
        <div className="card card-back" onClick={flipCard4}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>
      
    </div>
  )
}

export default About;