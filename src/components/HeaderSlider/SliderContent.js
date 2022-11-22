import React from 'react'

function SliderContent({activeIndex, imageSlider}) {
  return (
     <section>
        {imageSlider.map((slide, index) => (
            <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <img className="slide-image" src={slide.urls} alt="img" />
                <h2 className="slide-title">{slide.title}</h2>
                <h5 className="slide-text">{slide.description}</h5>
                {/* <h2 className="slide-story">{slide.story}</h2> */}
                
                </div>
        ))}
     </section>  
  )
}

export default SliderContent