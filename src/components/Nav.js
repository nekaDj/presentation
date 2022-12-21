import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import './../App.css'


const Nav = ({location})=>{
    const [menuDisappearOnMobile, setMenuDisappearOnMobile] = useState(true)

    // const clickOnLink = (e)=>{
    //     e.preventDefault();
    //     window.location.href= "#home";                     
    // }


    return (
        
        <nav className='nav'>
            <div>Neska</div>  
            <div >
                <ul  className={ menuDisappearOnMobile?"nav_ul_disappear":"nav_ul_appear"}>
                    <Link to="/" onClick={()=>setMenuDisappearOnMobile(true) } className="nav-menu-item" >Home</Link>
                    {/* <li> <a href="#home" className="nav-menu active">Home</a></li> */}
                    {/* <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#home" className="nav-menu-item active">Home</a></li> */}
                    
                    {location.pathname==="/" && <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#service" className="nav-menu-item ">Service</a></li>}
                    {location.pathname==="/" && <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#aboutme" className="nav-menu-item ">About Me</a></li>}
                    {location.pathname==="/" && <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#skill" className="nav-menu-item">Skills</a></li>}
                    {location.pathname==="/" && <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#portfolio" className="nav-menu-item ">Portfolio</a></li>}
                    {location.pathname==="/" && <li> <a onClick={()=>setMenuDisappearOnMobile(true)} href="#contact" className="nav-menu-item ">Contact</a></li>}
                </ul>
                <input type="checkbox" id="check" onClick={()=>setMenuDisappearOnMobile(prev =>!prev)}/>
                <label htmlFor="check">
                    <span><GiHamburgerMenu /></span>
                </label>
                
            </div>
        </nav>
     
        
    )
}

export default Nav;