import React from 'react'  
import "../ServicePage/Service.css";  
import s1 from "../img/s1.jpg"
import services2 from "../img/services2.jpg"
import service3 from "../img/service3.jpg"


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
                            <img src={s1} alt="" height={230} className="card-img-top" />
                        </div>
                        
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">CONSOL SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">President</h6>
                            </div>
                            <p className="card-text">Our Air Cargo service to Nigeria attends to numbers of shipping needs of individuals and Business. This Air freight service can handle all types of cargoes, and there is no restriction to sizes of cargo we can move to Nigeria for you from all our locations. Our Air cargo is operational and effective in more than forty counties.</p>
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
                                <h5 className="card-title text-info">AIR FREIGHT SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Co-Founder</h6>
                            </div>

                            <p className="card-text">Our management consulting services focus on our clients’ most critical needs across all industries and geographies. We consult on needs such as; strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics etc.we believe that quality people offer the best of themselves, and create ingenious ways</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-3">
                    <div className="card">
                        <div className="img-container">
                            <img src={service3} alt="" className="card-img-top" />
                        </div>
                        
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title text-info">SEA FREIGHT SERVICES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Operation Manager</h6>
                            </div>
                            <p className="card-text">Looking for the lowest shipping costs? Choose our sea freight services. Choose our sea freight services when costs are your primary concern, time is not a factor or your shipments are large and heavy. We ship significant volumes every year, which enables us to offer you capacity, frequent departures and competitive rates</p>
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