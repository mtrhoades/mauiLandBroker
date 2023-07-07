import Carousel from 'react-bootstrap/Carousel';
import maluhiaPic from '../assets/images/maluhiaPic.jpeg';
import maluhiaPic2 from '../assets/images/maluhiaPic2.jpeg';
import maluhiaPic3 from '../assets/images/maluhiaPic3.jpeg';
import maluhiaPic4 from '../assets/images/maluhiaPic4.jpeg';
import maluhiaPic5 from '../assets/images/maluhiaPic5.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left-section'>
          <h4>
            Maui is our Paradise. Maui Land Broker and Property Management, Inc. can help you find the perfect property or build your new custom cedar home. Shirley and Joe have over 25 years experience in the construction and real estate market within the island of Maui. We will help you become part of this wonderful community. We specialize in properties in Central and South Maui. Please use our services. Our roots are in the island and I can give you information from a kama'aina perspective.
          </h4>
        </div>

      <div className='hero-right-section'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic2}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic3}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic4}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic5}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  )
}

export default Hero;