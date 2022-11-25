import React from 'react'
import ReactCardSlider from './ReactCardSlider'

function Carousel() {
    const slides = [
        {image:'https://onthego.woozeee.com/static/media/train.5d9e7875.png',title:"Transportation of goods"},
        {image:'https://onthego.woozeee.com/static/media/boat.4f70f195.png',title:"Transportation of goods"},
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/10/8.jpg',title:"Transportation of goods"},
        {image:'https://f.hubspotusercontent00.net/hubfs/459204/Images/Services/Technology/wms-inventory-management.jpg',title:"Transportation of goods"},
        {image:'https://onthego.woozeee.com/static/media/bus.0a8e3cd5.png',title:"Transportation of goods"},
        {image:'https://images.pexels.com/photos/11136994/pexels-photo-11136994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:"Transportation of goods"},
        {image:'https://derronshipping.com/wp-content/uploads/2019/04/maritime.jpg',title:"Transportation of goods"},
      ];
    
  return (
      <div id="AppHeader">
      <ReactCardSlider slides={slides}/>
      </div>
  )
}

export default Carousel