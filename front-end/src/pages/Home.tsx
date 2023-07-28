import Hero from '../components/Hero';
import Cards from '../components/Cards';
import taroLeaves1 from '../assets/images/taroLeaves1.png';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="wrapperForImgAndCardsAndContact">
        {/* <div className="imgDiv">
          <img id="img1" alt="leaves and flowers" src={taroLeaves1}></img>
          <img id="img2" alt="leaves and flowers" src={taroLeaves1}></img>
        </div> */}
        <div className="cardAndContactContainer">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Home;