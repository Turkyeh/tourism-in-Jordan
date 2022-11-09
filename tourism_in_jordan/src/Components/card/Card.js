import './Card.css';

import place1 from '../../assets/images/roman_thaert.jpg';
import Um_Qais from '../../assets/images/Um Qais.jpg';
import Aqaba from '../../assets/images/Aqaba Jordan.jpg';
import Ajloun from '../../assets/images/Ajloun.jpg';
import Petra from '../../assets/images/petra.jpg';
import Jerash from '../../assets/images/Jerash.jfif';
import Deadsea from '../../assets/images/Dead Sea.jpg';
import Amman from '../../assets/images/Amman Citadel.jpg';



// const Arr = {{name}};

const Card = (props) => {
  return (
    <div>


          
      <img src={props.image} alt="" />
      {/* مررتها كمنغير  */}
      <h4>Amman<br /><span>{props.title}</span></h4><br /><br />
      {/* مررتها ك props */}
                                            <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button> 

    </div>
  )
}

export default Card;
