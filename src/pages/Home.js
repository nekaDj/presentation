

const Home = () =>{
    return(
      
        <section className="home" id="home">
            {/* <img className="home-image" src={profile_1} alt="" /> */}
            <div className="home-presentation">
                <p className="home-presentation-title">I'M NDOUMBA TCHANTCHOU IVAN</p>
                <p className="home-presentation-description">I'm a full stack developper</p>
                <br />
                <div>
                    <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href='href="http://www.linkedin.com/in/ndoumba-tchantchou-b08884b7"';
                                }}  className="btn">Linkdin
                    </button>
                </div>
            </div>
        </section>
            
 
        
    )
}

export default Home ;