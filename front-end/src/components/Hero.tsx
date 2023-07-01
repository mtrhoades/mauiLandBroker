import flowerPic from '../assets/images/aloha.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left-section'>
            <h1>Call Us Today! (808)442-3036</h1>
            <h4>A full service real estate sales and management company</h4>
        </div>

      <div className='hero-right-section'>
        <img className='hero-img' src={flowerPic} alt='laptop' />
      </div>
    </div>
  )
}

export default Hero;