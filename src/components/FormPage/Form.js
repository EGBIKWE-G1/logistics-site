import React, { useState } from 'react'  
import "../FormPage/Form.css";  
  

function Form() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubjectInputChange = (event) => {
        setValues({...values, subject: event.target.value})
    }

    const handleMessageInputChange = (event) => {
        setValues({...values, message: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if(values.name && values.email && values.subject && values.message){
        setValid(true);
        }
    }
  return (
        <section>
             <div className="contact-detailsHeader">
        <div className="container">
            <div className="text-center">
                <h1 className="ContactHeader-Title">Contact Us</h1>
                <p style={{fontSize: "18px"}}>Contact For Any Query</p>
            </div>
            <div className="row contact-form">
                <div className="col-md-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd"
                        frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0" title="fx."></iframe>
                </div>
                <div className="col-md-6">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={handleSubmit}>
                     {submitted && valid ? <div className="success-message">Success! Thank you for contacting us we will get back to you soon</div> : null} 
                        <div className="control-group">
                            <input 
                               onChange={handleNameInputChange}
                               value={values.name}
                               name="name"
                               type="text" 
                               className="form-control" 
                               id="name" 
                               placeholder="Full Name"
                                required="required" data-validation-required-message="Please enter your name" 
                                />
                            <p className="help-block text-danger"></p>
                            {submitted && !values.name ? <span className="email-error">Please enter your full name</span> : null }
                        </div>

                        <div className="control-group">
                            <input 
                               onChange={handleEmailInputChange}
                               value={values.email}
                               name="email"
                               type="email" 
                               className="form-control" 
                               id="email" 
                               placeholder="Your Email"
                               required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                            {submitted && !values.email ? <span className="email-error">Please enter your email</span> : null }
                        </div>

                        <div class="control-group">
                            <input 
                                onChange={handleSubjectInputChange}
                                value={values.subject}
                                name="subject"
                                type="text" 
                                class="form-control" id="subject" 
                                placeholder="Subject"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p class="help-block text-danger"></p>
                            {submitted && !values.subject ? <span className="email-error">Please enter your subject</span> : null }
                        </div>
                        <div className="control-group">
                            <textarea 
                                onChange={handleMessageInputChange}
                                value={values.message}
                                name="message"
                                className="form-control" 
                                id="message" placeholder="Message" 
                                required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                            {submitted && !values.message ? <span className="email-error">Please enter your message</span> : null }
                        </div>
                        <div>
                            <button className="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </section>
  )
}

export default Form