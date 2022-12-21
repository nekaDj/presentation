import serviceData from '../data/service'
import {AiOutlineArrowUp} from 'react-icons/ai'


const Service = () =>{
    return(
        <>
            <section className="service"  id="service">
                <h1 className="section-title">My Services</h1>
                <div className='service-boxes'>
                    {serviceData.map(function(service){
                    return(<div className="service-box" key={service.id}>
                        <h3 className="service-box-item">{service.title}</h3>
                        <p className="service-box-item">{service.description}</p>
                    </div>)
                })}
                </div>
            </section>
            
            <a className='stiky-button' href="#home"> <AiOutlineArrowUp /></a>
        </>
        
    )
}

export default Service ;