import React from 'react'
import "../AboutPage/About.css";  
import about from "../img/about.jpg";

function About() {
  return (
    <>
    <div className="section" id="about">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1><span style={{color: "crimson"}}>About</span> Us</h1>
				</div>
				<div className="content">
					<h3>Onard International Limited is one of the fastest growing Nigerian Logistics Company. Onard was incorporated in November 15 2022 and primarily engaging in the following businesses among others namely: flight logistics, carriage of passengers and freight, Supply Chain / Logistics Management, procurers of over flyer and landing permit</h3>
					{/* <p>Lorem .</p> */}
					<div className="button">
						<a href=" #">Read More</a>
					</div>
				</div>
			</div>
			<div className="image-section">
				<img src={about} alt='img' />
			</div>
		</div>
	</div>
    </>
  )
}  

export default About