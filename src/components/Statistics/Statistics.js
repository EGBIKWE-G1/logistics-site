import React from 'react'
import "../Statistics/Statistics.css";  
    

function Statistics() {
  return (
    <section className="Statistics-Section">
        <h2 className="Statistics-Section-Title">Client satisfaction is our primary focus</h2>

        <div className="Statistics-Container">

        <div className="Client-1">
        <h2><i class='fas fa-store-alt'></i> 500</h2>
        <p className="">storages</p>
        </div>

        <div className="Client-1">
        <h2><i className="fa fa-check"></i> 300</h2>
        <p>Projects</p>
        </div>

        <div className="Client-1">
        <h2 className="flex-item item-3"><i className="fa fa-users"></i> 100</h2>
        <p className="flex-item item-3">Clients</p>
        </div>

        <div className="Client-1">
        <h2 className="flex-item item-4"><i className="fa fa-user"></i> 250</h2>
        <p className="flex-item item-4">Members</p>
        </div>

        </div>

    </section>
  )
}

export default Statistics