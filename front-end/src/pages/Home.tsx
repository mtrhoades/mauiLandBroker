import Hero from '../components/Hero';
import Cards from '../components/Cards';
import taroLeaves1 from '../assets/images/taroLeaves1.png';
import lilikoi from '../assets/images/lilikoi1-removebg-preview.png';

const Home = () => {
  return (
    <div className="homeContainer">
      <Hero />
      <Cards />
    </div>
  )
}

export default Home;