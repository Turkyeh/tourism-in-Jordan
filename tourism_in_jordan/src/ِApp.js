// import { ReactDOM } from "react";
import './App.css';
// import Hero from './Components/Hero/Hero';
// import './Components/Footer/Footer';
// import './Components/Header/Header';
// import './Components/Container/Container'
// import Header from './Components/Header/Header';
// import Container from './Components/Container/Container';
// import Footer from './Components/Footer/Footer';

// الاختصار للسطور 
import { Header,Footer,Hero,Tours } from './section/index';
import { Container} from './Components/index';

// Arrow function 

const App = () => {
    
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
                <Tours />
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