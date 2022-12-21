import { useParams } from 'react-router-dom';

import {portfolio} from '../data/portfolio';



const Portofolio = () =>{
    //const [portfolioData, setPortfolioData] = useState(portfolio)
    const {pid} = useParams();
    const portfolio_id = portfolio.filter((item)=>item.id === Number(pid));
    const image = require(`../images/${portfolio_id[0].image}`);
    // let keyBadge = 0;
    
    //Click on submenu in portfolio
    
    const clickOnLink = (e, link)=>{
        e.preventDefault();
        window.location.href= link;                     
    }


    return(
        <section className="pid">
            <div className="pid-title">
                <img src={image} alt="" className="pid-title-image" />
                <div className="pid-title-description">
                    <div className="pid-title-description-title">
                        {portfolio_id[0].title}
                    </div>
                    <div className="pid-title-description-divider"></div>
                    <div className="pid-title-description-text">
                        {portfolio_id[0].description}
                    </div>
                    <div className="pid-title-description-btn">
                        {/* <button onClick={(e)=>clickOnLink(e, portfolio_id[0].linkGitHub)} className="btn" >See Repo</button> */}
                       <button onClick={(e)=>clickOnLink(e, portfolio_id[0].linkWebSite)} className="btn" >See Live demo</button> 
                    </div>
                </div>
            </div>
            <div className="pid-badge">
                {portfolio_id[0].badges.map(function(item){
                    return <img src={require(`../images/${item}`)} alt="" className="pid-badge-box" key={item}/>
                })}
            </div>
        </section>
    )
}

export default Portofolio ;