import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLocationDot)



const Contact = () =>{
    return(
        <section className="contact" id="contact">
            <div className="contact-title">
                <h1 className="section-title">Contact Me</h1>
                <div className="contact-title-description">
                    Here you have my contact
                </div>
                <div className="contact-title-divider"></div>
            </div>
            <div className="contact-details">
                <div className="contact-details-left">
                    <div className="contact-details-left-box">
                        <div >
                            <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        </div>
                        <div >
                            <h4>Locate Us</h4>
                            <p>Douala, Cameroon</p>
                        </div>
                        
                        
                    </div>
                    <div className="contact-details-left-box">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </div>
                        <div>
                            <h4>Get in online</h4>
                            <p>indoumba@gmail.com</p>
                        </div>
                        
                    </div>
                </div>
                <div className="contact-details-right">
                    <div className="row">
                        <input type="text" placeholder="Your name" className="form" />
                        <input type="text" placeholder="Your email" className="form" />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Your subject" className="form" />
                    </div>
                    <div className="row">
                        <textarea name="" id=""   placeholder="Your message" className="form form-texterea" ></textarea>
                    </div>
                    <div className="row">
                        <button className="btn" >Send message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact ;