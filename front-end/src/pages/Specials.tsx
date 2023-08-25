import flowerImg from '../assets/images/hawaiianFlowersImg.png';

const Specials = () => {
  return (
    <div className="specialsContainer">
      <h3>Kama'āina Discount Specials for Buyers and Sellers</h3>
      <div className="specialsInfoDiv">
        <img src={flowerImg} alt="hawaiian flower bouqet"></img>
        <ul>
          <li>All special discounts only apply to kama'āina individuals</li>
          <li>1% discount for buyers OR sellers when transaction goes through MLB</li>
          <li>Our staff here at MLB will give all the necessary information needed</li>
          <li>Something else here for content</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Specials;