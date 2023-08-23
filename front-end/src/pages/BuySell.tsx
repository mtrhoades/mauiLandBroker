import SugarBeachImg from '../assets/images/sugarbeach.jpg';

const BuySell = () => {
  return (
    <div className="buySellContainer">
      <div className="buySellSubContainer">
        <div>
          <h3>Information on buying and selling homes through MLB</h3>
        </div>

        <div>
          <h4>Reasons to List With Us:</h4>
        </div>

        <div>
          <ul>
            <li>
              Exposure for your property through the Maui News in which we purchase add space in realtors working for you to feature your listing.
            </li>
            <li>
              Web site hits. Since we are also a property management company we have buyers and sellers visiting our web site for association documents, which provide exposure for your property.
            </li>
            <li>
              Flexibility in listing terms. We will work with your to provide terms and costs that will help you in getting the best return on your sale.
            </li>
            <li>
              A company that will help protect you from any future legal disputes. We understand ethics and disclosure. We will make sure your information is presented legally and in a timely manner.
            </li>
            <li>
              We are very good in helping your prepare your property for sale. We can provide information that will give your property any edge in the market. We have great small businesses who can provide the services your may need to prepare your property for sale.
            </li>
          </ul>
        </div>

        <div>
          As a Seller what should I know?
        </div>

        <div>
          As a Buyer what should I know?
        </div>
      </div>
      <img src={SugarBeachImg}></img>
    </div>
  )
}

export default BuySell;