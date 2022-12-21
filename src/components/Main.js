import Home from '../pages/Home'
import Service from '../pages/Service'
import AboutMe from '../pages/AboutMe'
import Skill from '../pages/Skill'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'

const Main = () =>{
    return(
        <>
            <Home />
            <main>
                <Service />
                <AboutMe />
                <Skill />
                <Portfolio  />
                <Contact />
            </main>
        </>
    )
}

export default Main 