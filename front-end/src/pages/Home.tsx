import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import leafBgImg from '../assets/images/leaves.png';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="wrapperForImgAndCardsAndContact">
        <div className="imgDiv">
          <img id="img1" alt="leaves and flowers" src={leafBgImg}></img>
          <img id="img2" alt="leaves and flowers" src={leafBgImg}></img>
        </div>
        <div className="cardAndContactContainer">
          <Cards />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home;