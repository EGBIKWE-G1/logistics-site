import React from 'react'  
import "../FooterPage/Footer.css";  


function Footer() {
  return (
    <div className="FooterSectionPage" id="contact">
        <footer>
        <div class="Footer-container">
            <div class="row">
                  <div class="col" id="company">
                      <h6 className="Footer-AboutUs"><span style={{fontSize: "22px"}}>O</span>nard International Limited</h6>
                      <p style={{fontSize: "13px"}}>
                      We wish to extend our professional competence in service delivery to your inbound shipments in the area of door to door delivery, domestic customs management and inland distribution.
                      </p>
                      <div class="social">
                        <a href=" #"><i class="fab fa-facebook"></i></a>
                        <a href=" #"><i class="fab fa-instagram"></i></a>
                        <a href=" #"><i class="fab fa-youtube"></i></a>
                        <a href=" #"><i class="fab fa-twitter"></i></a>
                        <a href="  #"><i class="fab fa-linkedin"></i></a>
                      </div>
                  </div>


                  <div class="col" id="services">
                     <h3>WE OFFERS</h3>
                     <div class="links">
                        <a href=" #">Air Freight</a>
                        <a href=" #">Packaging & Storaging</a>
                        <a href=" #">Railway Logistics</a>
                        <a href=" #">Road Transportation</a>
                     </div>
                  </div>

                  <div class="col" id="useful-links">
                     <h3>Links</h3>
                     <div class="links">
                        <a href=" #">Home</a>
                        <a href=" #">About</a>
                        <a href=" #">Services</a>
                        <a href=" #">Contact</a>
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
        <div className="copy-right">
         <p>Copyrights © 2022 Onard International Limited | All rights reserved.</p>
        </div>
     </footer>
    </div>
  )
}

export default Footer