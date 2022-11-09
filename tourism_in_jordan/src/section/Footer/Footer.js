// import React from 'react'
import './Footer.css';

import { useState } from "react";
import ReactDOM from "react-dom/client";
// import { IconName } from "react-icons";
// import { FaStar } from 'react-bootstrap';
// to use bootstrab liblary
const Footer = (props) => {
 
      // Footer
  if (props.Num === "1") {
    return ("num is 1")
  }
  else {
    return (
      <div>
    <footer class="footer-20192">
      <div class="site-section">
        <div class="container">

          <div class="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 class="mb-0">Ready for a next project?</h2>
              <h3 class="text-dark">Let's get started!</h3>
            </div>
            <div class="ml-auto">
              <a href="#" class="btn btn-dark rounded-0 py-3 px-5"> Contact us</a>
            </div>
          </div>
          <div class="row">

            <div class="col-sm">
              <a href="#" class="footer-logo">JO-Tours</a>
              <p>
                <small>Welcome to Jordan, the capital of Arab tourism. The flower of the Arab countries</small>
              </p>
            </div>
            <div class="col-sm">
              <h3>Customers</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Buyer</a></li>
                <li><a href="#">Supplier</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>Company</h3>
              <ul class="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>Further Information</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Follow us</h3>
              <ul class="list-unstyled social">
                <li><a href="#"><span  class="fa fa-facebook"></span></a></li>
                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                <li><a href="#"><span class="fa fa-github"></span></a></li>
                <li><a href="#"><span class="fa fa-pinterest"></span></a></li>
              </ul>
            </div>
            
          </div>
        </div>
          </div>
                    <center>© 2022 All Rights Reserved.</center>

    </footer>

      </div>

    );
 
  }
}

export default Footer
