import React from 'react'  
import "../ServicePage/Service.css";  
import services1 from "../img/services1.jpg"
import services2 from "../img/services2.jpg"
import services3 from "../img/services3.jpg"


function Service() {  
  return (
    <div id="service">
          <section id="Services-Container">
        <div className="container" >
        <h2 className="Services-Title"><span style={{color: "crimson"}}>Our</span> Services</h2>
        <h4 className="text-center">WE PROVIDE FASTEST & AFFORDABLE CARGO SERVICES</h4>
        <p className="text-center">WE HAVE WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH</p>
          <p className="text-center">THE SERVICES WE OFFER</p>
        <br />
            <div className="row">
                <div className="col-lg-4 mb-3">
                    <div className="card">
                        <div className="img-container">
                            <img src={services1} alt="" className="card-img-top" />
                        </div>
                        
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">ROAD TRANSPORTATION</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">President</h6> */}
                            </div>
                            <p className="card-text">Through our network, we offer a full range of road transportation services, inside or outside Nigeria.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-3">
                    <div className="card">
                        <div className="img-container">
                            <img src={services2} alt="" className="card-img-top" />
                        </div>
                        
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">RAIL AND MULTIMODAL</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6> */}
                            </div>
                            <p className="card-text">Faster than sea freight, less expensive than air freight. More and more common and used in daily transports!</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-3">
                    <div className="card">
                        <div className="img-container">
                            <img src={services3} alt="" className="card-img-top" />
                        </div>
                        
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">WAREHOUSING</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Operation Manager</h6> */}
                            </div>
                            <p className="card-text">We have access to warehousing facilities and the necessary know-how, so our customers can focus on their core business</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    </div>
  )
}

export default Service