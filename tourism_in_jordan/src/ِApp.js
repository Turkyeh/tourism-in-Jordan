// import { ReactDOM } from "react";

// rafc react 
import './App.css';

import { useState } from "react";


// import Hero from './Components/Hero/Hero';
// import './Components/Footer/Footer';
// import './Components/Header/Header';
// import './Components/Container/Container'
// import Header from './Components/Header/Header';
// import Container from './Components/Container/Container';
// import Footer from './Components/Footer/Footer';

// الاختصار للسطور 
import { Header,Footer,Hero,Tours } from './section/index';
import { Container } from './Components/index';
// import loginform from './loginform';
import Carddetal from './Components/index';

// Arrow function 

const App = () => {
     const [tours] = useState([
    {
      id: 1,
      name: "Roman amphitheater",
      info:
        "Petra was later annexed to the Roman Empire and continued to thrive until a large earthquake in 363 AD destroyed much of the city in the 4th century AD. ",
      city:"Maan"
    },
    {
      id: 2,
      name: "Um_Qais",
      info:
        "Jerash (aka Gerasa, Gerash or Gerasha) is the capital and the largest city of the Jerash Governorate in Jordan, but in ancient times it was one of the wealthiest and most cosmopolitan cities in the ancient Near East. ",
        city:"Maan"

    },
    {
      id: 3,
      name: "Aqaba",
      info:
        "Zarqa is a Jordanian city and the capital of the Zarqa Governorate, which is nearly 20 km northeast of the capital city of Amman. Zarqa is the third largest city in terms of population, with a population of about 572,290 in 2013, and is considered the industrial capital of Jordan. There are many locations not to be missed in Zarqa including a wildlife reserve, a wetland reserve and several castles. ",
            city:"Maan"

         },
    {
      id: 4,
      name: "Ajloun",
      info:
        "Home to the prestigious Yarmouk University, Irbid is a bustling Jordanian city brimming with museums, ancient architecture, and an upmarket city charm. As the city is less frequented by tourists than Jordan’s more popular cities, a visit to Irbid will uncover an authentic Jordanian lifestyle with delicious street side food stalls, restaurants and local shops.",
          city:"Maan"

    },
    {
      id: 5,
      name: "Petra",
      info:"The ancient city of Petra is one of Jordan’s national treasures and by far its best known tourist attraction. Petra is the legacy of the Nabataeans, an industrious Arab people who settled in southern Jordan more than 2,000 years ago. Admired then for its refined culture, massive architecture and ingenious complex of dams and water channels, Petra is a UNESCO World Heritages Site and one of the new Seven Wonders of the World. Inhabited by the Nabateans, Edomites and Romans, Petra brought together the knowledge and skill of these civilizations to create this world wonder. Caravans laden with incense, silks, spices and other exotic goods would rest at Petran This site is one of Jordans UNESCO world heritage sites, for more information ",
         city:"Maan"

   
         },
     {
      id: 6,
      name: "Jerash",
      info:"A close second to Petra on the list of favorite destinations in Jordan, the ancient city of Jerash boasts an unbroken chain of human occupation dating back more than 6, 500 years and is only about 45km north of Amman and because of its water the site has been settled at least since Neolithic times.The city's golden age came under Roman rule and the site is now generally acknowledged to be one of the best-preserved Roman provincial towns in the world and one of the Decapolis cities once named Gerasa. Hidden for centuries in sand before being excavated and restored over the past 70 years, Jerash reveals a fine example of the grand, formal provincial Roman urbanism that is found throughout the Middle East, comprising paved and colonnaded streets, soaring hilltop temples, grand theatres, spacious public squares and plazas, baths, fountains and city walls pierced by towers and gates. Beneath its external Graeco-Roman veneer, Jerash also preserves a subtle blend of east and west. Its architecture, religion and languages reflect a process by which two powerful cultures meshed and coexisted - The Graeco-Roman world of the Mediterranean basin and the ancient traditions of the Arab Orient.", 
   city: "Jerash"
   
         },
      {
      id: 7,
      name: "Deadsea",
          info: "A spectacular natural wonder the Dead Sea that is located 427 meters below sea level is perfect for wellness and religious tourism, fun in the sun with the family. With its mix of beach living and religious history you can soak up the sun while Biblical scholars can get their daily dose of religious history. The leading attraction at the Dead Sea is the warm, soothing, super salty water itself – some ten times saltier than sea water, and rich in chloride salts of magnesium, sodium, potassium, bromine and several others. The unusually warm, incredibly buoyant and mineral-rich waters have attracted visitors since ancient times, including King Herod the Great and the beautiful Egyptian Queen, Cleopatra. All of whom have luxuriated in the Dead Sea's rich, black, stimulating mud and floated effortlessly on their backs while soaking up the water's healthy minerals along with the gently diffused rays of the Jordanian sun.",
          city: "Madaba"
   
         },
       {
      id: 8,
      name: "Amman Citadel",
      info:"The Amman Citadel, located in the heart of modern-day Amman, is an impressive site that helps tell the story of this region’s layered heritage.  It is also the site of one of ACOR’s most impactful undertakings to date: the excavation and partial restoration of the Great Temple of Amman, also known as the Temple of Hercules.  ",
         city:"Amman"

   
         },
  ]);
    return (
        <>
            {/* react fragment 
        <h2>YAsmen TESTER</h2>
            <p>test</p> */}
            <Header
                // text="new text" color="red"
            />
            {/* بدو يمررها لل propes */}
            <Container>
               <Hero/>
                {/* COuntant <Header /> */}
                <Tours data={tours} />
                <br/>                <br/>
                <br/>
                <br/>
                <br/>

            </Container>
            {/* compounat داخل ببعض  */}
            {/* هون لما تكوني بدك تستخدمي مكون جوا مكون  */}
            <Footer
                // Num="1"
            />
            {/* لازم دائما اول حرف كبير  */}
            


        </>
        //لو ما حطيتها بال <> or <div> كان ما رح يتعرف الا ع اول وحدة ويعطي ايرور 

    );
}

export default App;
// دائما بعدها export