import React from 'react'  
import "../BookingPage/Booking.css";  


function Booking() {
  return (
        <section className="Booking-section-page">
            <h1 className="text-center">Quick <span style={{color: "crimson"}}>Book</span></h1>
            <br />
            {/* <div className="BookingContainer">
                <div className="item item--1">1: Orange</div>
                <div className="item item--2">2: Green</div>
                <div className="item item--3">3: violet</div>
                <div className="item item--4">4: Pink</div>
                <div className="item item--5">5: Blue</div>
                <div className="item item--6">6: Brown</div>
            </div> */}

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Abuja - Umuahia</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lagos Jibowu - Mbaise</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lagos Bolade Oshodi - Owerri</h3>
            </div>
            </section>

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Port Harcourt - Enugu</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lagos Bolade Oshodi - Calabar</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lokoja - Port Harcourt</h3>
            </div>
            </section>

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Enugu - Port Harcourt</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lagos Bolade Oshodi - Calabar</h3>
            </div>
            <div className="BookingContainer">
                <h3>Lokoja - Port Harcourt</h3>
            </div>
            </section>

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Lagos Jibowu - Enugu</h3>
            </div>
            <div className="BookingContainer">
                <h3>Owerri - Calabar</h3>
            </div>
            <div className="BookingContainer">
                <h3>Calabar - Lagos Jibowu</h3>
            </div>
            </section>

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Lagos Jibowu - Benin</h3>
            </div>
            <div className="BookingContainer">
                <h3>Calabar - Abuja</h3>
            </div>
            <div className="BookingContainer">
                <h3>Abuja - Lagos Jibowu - Abuja</h3>
            </div>
            </section>

            <section className="BookingContainer-header">
            <div className="BookingContainer">
                <h3>Lagos Bolade Oshodi - Onitsha</h3>
            </div>
            <div className="BookingContainer">
                <h3>Port Harcourt - Calabar</h3>
            </div>
            <div className="BookingContainer">
                <h3>Calabar - Lagos Jibowu</h3>
            </div>
            </section>
        </section>
  )
}
  
export default Booking