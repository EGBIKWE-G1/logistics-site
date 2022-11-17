import React from 'react'
import ReactCardSlider from './ReactCardSlider'

function Carousel() {
    const slides = [
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/10/7.jpg',title:"Transportation of goods"},
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/10/4.jpg',title:"Transportation of goods"},
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/10/8.jpg',title:"Transportation of goods"},
        {image:'https://images.pexels.com/photos/11136994/pexels-photo-11136994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:"Transportation of goods"},
        {image:'https://derronshipping.com/wp-content/uploads/2019/04/maritime.jpg',title:"Transportation of goods"},
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/11/2-1.jpg',title:"Transportation of goods"},
        {image:'https://www.confidencecargo.com/wp-content/uploads/2015/10/5.jpg',title:"Transportation of goods"},
      ];
    
  return (
      <div id="AppHeader">
      <ReactCardSlider slides={slides}/>
      </div>
  )
}

export default Carousel