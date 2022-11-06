// rafc // نزلت extention es7

import './Header.css';
import logo from '../../assets/images/love-travel-logo-template-design-260nw-1483960325.webp'
// import logo form '../../assets/images/logo.png';
// كاني عم احكيلو بمتغير ال logo اعطيني امتداد
// import React from 'react'
import Navitem,{NavitemDropDown} from '../../Components/Navitem/Navitem';

const Header = () => {
  return (
    // <div style={{ color:props.color}}>
    //   Header
    //   {props.text}
    // </div>

    <>
      {/* <nav classNameName="navbar navbar-expand-md bg-dark navbar-dark">
        {/* غيرت اسم ال className to classNamename */}
        {/* <a classNameName="navbar-brand" href="#" >
                 <img  src={logo} alt="logo" width="40"  / >

        </a>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span classNameName="navbar-toggler-icon"></span>
  </button>

  <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul classNameName="navbar-nav mr-auto">
      <Navitem>
        <a classNameName="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </Navitem>
    <Navitem>
        <a classNameName="nav-link" href="#">About</a>
    </Navitem>
    <NavitemDropDown>
        <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
          <a classNameName="dropdown-item" href="#">Action</a>
          <a classNameName="dropdown-item" href="#">Another action</a>
          <div classNameName="dropdown-divider"></div>
          <a classNameName="dropdown-item" href="#">Something else here</a>
        </div>
    </NavitemDropDown>
       <li classNameName="nav-item">
        <a classNameName="nav-link" href="#">Countact</a>
      </li>
    </ul>
    <form classNameName="form-inline my-2 my-lg-0">
      <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */} 
      
 <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                   <a className="navbar-brand" href="#" >
                  <img style={{width: '30px'}} src={logo} alt="logo" width="20"  / >

        </a>
                   
                    <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i className="fa fa-search"></i>
                      </form>
                    </div>
               
                    <ul className="nav">
                          <Navitem>
<a href="index.html" className="active">Home</a></Navitem>
                           <Navitem>
<a href="browse.html">Browse</a></Navitem>
                           <Navitem>
<a href="details.html">Details</a>    </Navitem>

                      <Navitem>
<a href="streams.html">Streams</a></Navitem>

                  
                        {/* <li><a href="profile.html">Profile <img src="assets/images/profile-header.jpg" alt=""></a></li> */}
                    </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
               
                </nav>
            </div>
        </div>
    </div>
  </header>


    </>


  );

}

export default Header;
{/* // يعني بس بدي اشغل الي اسمها header */}


