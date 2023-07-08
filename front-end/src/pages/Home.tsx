import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import leafBgImg from '../assets/images/leafBg.jpg';

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{backgroundImage: `url(${leafBgImg})`}} className="cardAndContactContainer">
        <Cards />
        <Contact />
      </div>
    </div>
  )
}

export default Home;