import React from 'react'
import "../AboutPage/About.css";  
import "../AboutPage/Facilities.css";  
import about from "../img/about.jpg";
import Facilities from "./Facilities"

function About() {
  return (   
    <>
	<section className="About-Section">
    <div className="section" id="about">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1><span style={{color: "crimson"}}>About</span> Us</h1>
				</div>
				<div className="content">
					<h6>Through network of trustworthy and customer focused road freight, we offer a full range of road transportation services, inside or outside Nigeria.</h6>
					<p>Our trucking operators operate a fleet of vehicles in all sizes and dimensions, to cater for needs of any commodity, be it a container, pallet or a high & heavy shipment.</p>
					<p>We connect all major roadfreight hubs and railway within the region Northern, Central and Eastern Nigeria.</p>
					<div className="button">
						<a href="#contact">Contact Us</a>
					</div>
				</div>
			</div>
			<div className="image-section">
				<img src={about} alt='img' />
			</div>
		</div>
	</div>
	<Facilities />
	</section>
    </>
  )
}  

export default About