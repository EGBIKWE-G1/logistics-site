import React from 'react'  
import "../FooterPage/Footer.css";  


function Footer() {
  return (
    <div className="FooterSectionPage" id="contact">
      <div className='Title-FooterHeader'>
         <h2 className='mt-4'>Onard International Limited</h2>
      </div>
      <div className="footer-line"></div>
        <footer>  
        <div class="Footer-container">
            <div class="row">
                  <div class="col" id="company">
                      {/* <h6 className="Footer-AboutUs"><span style={{fontSize: "22px"}}>O</span>nard International Limited</h6> */}
                      <h6 className="Footer-AboutUs">SUBSCRIBE NEWSLETTER</h6>
                      <p style={{fontSize: "15px"}}>
                      We develop and sell flexible global logistics services and strive to meet our customer's requirements first time, on time and every time.
                      </p>
                      <div class="social">
                        <a href="!#"><i class="fab fa-facebook"></i></a>
                        <a href="!#"><i class="fab fa-instagram"></i></a>
                        <a href="!#"><i class="fab fa-youtube"></i></a>
                        <a href="!#"><i class="fab fa-twitter"></i></a>
                        <a href="!#"><i class="fab fa-linkedin"></i></a>
                      </div>
                  </div>


                  <div class="col" id="services">
                     <h3>WE OFFERS</h3>
                     <div class="links">
                        <a href="!#">Air Freight</a>
                        <a href="!#">Packaging & Storaging</a>
                        <a href="!#">Railway Logistics</a>
                        <a href="!#">Road Transportation</a>
                     </div>
                  </div>

                  <div class="col" id="useful-links">
                     <h3>Links</h3>
                     <div class="links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#service">Services</a>
                        <a href="#contact">Contact</a>
                     </div>
                  </div>

                  <div class="col" id="contact">
                      <h3>Contact</h3>
                      <div class="contact-details">
                         <i class="fa fa-location"></i>
                         <p>FF-42, Procube Avenue, <br /> NY, USA</p>
                      </div>
                      <div class="contact-details">
                         <i class="fa fa-phone"></i>
                         <p>+1-8755856858</p>
                      </div>
                      <div class="contact-details">
                        <i class="fa fa-envelope"></i>
                         <p>xyz@gmail.com</p>
                      </div>
                  </div>
            </div>

            <div class="row">
                  <div class="form">
                    <form action="">
                        <input type="text" placeholder="Email here..." />
                        <button><i class="fa fa-paper-plane"></i></button>
                    </form>
                  </div>
            </div>

        </div>
        <hr style={{color: "#fff"}} />
        <div className="copy-right">
         <p>Copyrights Onard International Limited © 2022 | Terms & Condtions Privacy Policy</p>
        </div>
     </footer>
    </div>
  )
}

export default Footer