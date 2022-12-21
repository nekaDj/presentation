import {portfolioMenu, portfolio} from '../data/portfolio';
import { useState} from 'react';
import { Link } from 'react-router-dom';


const Portofolio = () =>{
    const [portfolioData, setPortfolioData] = useState(portfolio)
    
    
    //Click on submenu in portfolio
    function clickMenu(idMenu){
        console.log(idMenu)
        setPortfolioData(portfolio.filter( (item)=>{
                    const menuselected = item.menu.filter(
                        (itemMenu)=> { 
                            return itemMenu === idMenu}
                    )
                    return menuselected.length !== 0
                }  
            ))
    }

    


    return(
        <section className="portfolio"  id="portfolio">
            <div className="portfolio-title">
                <h1 className="section-title">Portfolio Showcase</h1>
                <div className="portfolio-title-description">
                    I present you my small collection of projects
                </div>
                <div className="portfolio-title-divider"></div>
            </div>
            <div className="portfolio-menu">
                {portfolioMenu.map( menu=> <button className='btn-menu' key={menu.id} onClick={()=>clickMenu(menu.id)} > {menu.title}</button> )}
            </div>
            <div className="portfolio-boxes">
                {portfolioData.map(item=>{
                    return(<PortfolioBox key={item.id} id={item.id} image={item.image} title={item.title} showed={item.showed} /> )
                })}
                {portfolioData.length===0 && 
                <div className="portfolio-boxes-notyet">
                    <h2>NOT YET</h2>
                </div>}
                
            </div>
            
        </section>
        
    )
}


const PortfolioBox = (props) =>{
    const imageFile = require(`../images/${props.image}`)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return(
        <div className="portfolio-boxes-box" onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()}>
            <img src={ imageFile }  alt="" className="portfolio-boxes-box-image" />
            <div>
                {isHovering && <Link to={`pid/${props.id}`} className="project-link" >{props.title}</Link> }
            </div>
        </div>
        
    )
}

export default Portofolio ;