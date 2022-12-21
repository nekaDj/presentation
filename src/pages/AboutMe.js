import aboutme from "../images/aboutme.png"
const AboutMe = () =>{
    return(
        <section className="about" id="aboutme">
            <h1 className="section-title">About Me</h1>
            <div className="about-details">
                
                <img src={aboutme} alt="" className="about-details-image_"/>
                
                <div className="about-details-description">
                    <div className="about-details-description-text">
                        I started my career as a Javascript developer on January 1st, 2022 following a desire to realize a project: develop an application for the management of hospital activities.
                    </div>
                    <div className="about-details-description-text">
                        I am familiar with programming since 2012, year of my second year in engineering school in my country. I had to realize several development projects such as a text and video messaging, a sms sending api and many others. All these projects were developed with the Java language that I like very much. The year 2020 is the last year where I had to develop a web application before this year 2022. During this year I developed a web application for the management of some activities of a health center in Java. By him I put aside the programming.
                    </div>
                    <div className="about-details-description-text">
                        But since January 1, 2022, I seriously started programming again, but this time, I decided to change the register. I decided to learn JavaScript, and the frontend and backend technologies around this language. My goal was to learn Reactjs and Nodejs, express js, and the fundamentals of MongoDB. It was a great experience that allowed me to discover the power and flexibility of javascript. I still have a lot to learn but I'm excited every time I think about my development projects and how much I'll be able to achieve with these languages.
                    </div>

                    <div className="about-details-description-text">
                        My self-training in React js has given me a greater appreciation for CSS, although I'm more passionate about the backend and the algorithmic. I like to develop my own interfaces.
                    </div>

                    <div className="about-details-description-text">
                        I like new challenges, and I'm not a fan of routine. That's probably why I like programming. I'm self-taught thanks to online trainer videos (youtube, scrimba, codefreecamp, etc...) so I know how to handle myself and get the information I want.
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default AboutMe ;