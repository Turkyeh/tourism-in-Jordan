import './Tours.css';
import {Card} from '../../Components/index' 
import place1 from '../../assets/images/roman_thaert.jpg';
import Um_Qais from '../../assets/images/Um Qais.jpg';
import Aqaba from '../../assets/images/Aqaba Jordan.jpg';
import Ajloun from '../../assets/images/Ajloun.jpg';
import Petra from '../../assets/images/petra.jpg';
import Jerash from '../../assets/images/Jerash.jfif';
import Deadsea from '../../assets/images/Dead Sea.jpg';
import Amman from '../../assets/images/Amman Citadel.jpg';


const Tours = () => {
  return (
    // <div className='section-wrap'>
    //  <div className='section-header'>
    //           <h1>Most Tours place</h1>
    //           <br/>
    //           <br/>
    //       </div>
    //       <div className='most-popular-iteam'>
    //           <div className='card-wrap'>
                  
    //               <img className='Most-image' src={place1} alt="img1" />
    //               <div className='count'>
    //                   <h3 className='title'>Roman amphitheater</h3>
                      
    //                   <span>Amman</span>
    //               </div>
    //           </div>
    //           <ul>
    //               <li><span>More detalize</span></li>
    //           </ul>

    //       </div>

    //   </div>
       <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Most Popular</em> Right Now</h4>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6">
                    <div class="item">
                              <img src={place1} alt="" />
                              <Card/>
                      <h4>Amman<br/><span>Roman amphitheater</span></h4><br/><br/>
                                            <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="item">
                      <img src={Um_Qais} alt=""/>
                      <h4>IRBID<br/><span>Um_Qais</span></h4><br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="item">
                      <img src={Aqaba} alt=""/>
                      <h4>Aqaba<br/><span>Aqaba</span></h4>
                    <br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                      </div>
                    
                 <div class="col-lg-3 col-sm-6">
                    <div class="item">
                      <img src={Ajloun} alt=""/>
                      <h4>Ajloun<br/><span>Ajloun Castle </span></h4><br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                  </div>
                 
                    
                  <div class="col-lg-6">
                    <div class="item">
                      <div class="row">
                        <div class="col-lg-6 col-sm-6">
                          <div class="item inner-item">
                            <img src={Petra} alt=""/>
                            <h4> Petra<br/><span>Maan</span></h4>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="item">
                            <img src={Jerash} alt=""/>
                                <h4>Jerash<br/><span>Jerash</span></h4><br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="item">
                      <img src={Deadsea} alt=""/>
                         <h4>Dead sea<br/><span>Salt S</span></h4><br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="item">
                      <img src={Amman} alt=""/>
                          <h4>Amman Citadel<br/><span>/Amman</span></h4><br/><br/>
                                                                <button style={{border: '1px solid red', borderRadius: '30px'}} type="">More informatiom</button>

                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="main-button">
                      <a href="browse.html">Discover Popular</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Tours;
