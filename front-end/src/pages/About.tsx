import familyImg from '../assets/images/Family009.jpg';
import familyImg2 from '../assets/images/FamilyUse.jpg';

const About = () => {
  return (
    <div className="aboutContainer">
      <h3>About</h3>
      <h4>Maui Land Broker & Property Management</h4>

      <div className="about1stSection">
        <img src={familyImg}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
      </div>

      <div className="about2ndSection">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        <img src={familyImg2}></img>
      </div>
    </div>
  )
}

export default About;