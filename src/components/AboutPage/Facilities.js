import React from 'react'
import facility1 from "../img/facility1.png";
import facility2 from "../img/facility2.png";
import facility3 from "../img/facility3.png";
import facility4 from "../img/facility4.png";
import facility5 from "../img/facility5.png";
import facility6 from "../img/facility6.png";


function Facilities() {
  return (
        <section className="Bus-Facility-Page-section">
            <h2 className="text-center"><span style={{color: "crimson"}}>Bus</span> Facilities</h2>
            <div className="Facility-Card-Header">
  <div className="responsive">
    <div className="gallery">
      <img src={facility1} style={{width: "70px"}} alt="" />
      <div class="des">Air Condition</div>
    </div>   
  </div>

  <div class="responsive">
    <div class="gallery">
      <a href="/img/team1.jpg"><img src={facility2} style={{width: "70px"}} alt="" /></a>
      <div class="des">Toilet</div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
      <a href="!#"><img src={facility3} style={{width: "70px"}} alt="" /></a>
      <div class="des">Extra Leg Room</div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
      <a href="!#"><img src={facility4} width="300" style={{width: "70px"}} alt="" /></a>
      <div class="des">Media</div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
      <a href="!#"><img src={facility5} width="300" style={{width: "70px"}} alt="" /></a>
      <div class="des">Power</div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
      <a href="!#"><img src={facility6} width="300" style={{width: "70px"}} alt="" /></a>
      <div class="des">Excess Luggage</div>
    </div>
  </div>
  </div>
        </section>
  )
}

export default Facilities