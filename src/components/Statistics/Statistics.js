import React from 'react'
import "../Statistics/Statistics.css";  


function Statistics() {
  return (
    <section className="Statistics-Section">
        <h2 className="Statistics-Section-Title">Client satisfaction is our primary focus</h2>
    <div className="Statistics-Container">
        <div className="flex-item item-1">storages 500</div>
        <div className="flex-item item-2">Projects 300</div>
        <div className="flex-item item-3">Clients 100</div>
        <div className="flex-item item-4">Members 250</div>
    </div>
    </section>
  )
}

export default Statistics