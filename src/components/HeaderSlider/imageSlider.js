// import React from 'react'
import h1 from "../HeaderSlider/assets/h1.jpg";
import h3 from "../HeaderSlider/assets/h3.jpg";
import h2 from "../HeaderSlider/assets/h2.png";
// import Fourth from "../HeaderSlider/assets/Fourth.jpg";

const imageSlider = [
  {
    title: "Wellcome to",
    description: <p className="Data-Description1">Onard International Limited</p>,
    urls: h1,
  },       
  {
    title: <p className="Data-Title2">The modern way to</p>,
    description: <p className="Data-Description1">Commute across citiies</p>,
    urls: h3,
  },
  {
    title: "Road Transport",
    description: "Services",
    urls: h2,
  },
  // {
  //   title: "Flight",
  //   urls: Fourth,
  // },
  {
    title: "Wellcome to",
    description: <p className="Data-Description1">Onard International Limited</p>,
    urls: h1,
  },
]

export default imageSlider;