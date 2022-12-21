const Skill = () =>{

    const skills = [
        {
            id:1,
            name:"Java",
            percent: 40
        },
        {
            id:2,
            name:"JavaScript",
            percent: 80
        },
        {
            id:3,
            name:"React Js",
            percent: 70
        },
        {
            id:4,
            name:"Node Js/Express Js",
            percent: 50
        },
        {
            id:5,
            name:"Mongo DB",
            percent: 40
        }
    ]

    //Styles

    
    return(
        <section className="skill" id="skill">
            <div className="skill-left">
                <p className="skill-desctiption">
                    Let's Work Together
                </p>
                <br />
                <br />
                <br />
                <a href="http://www.linkedin.com/in/ndoumba-tchantchou-b08884b7" className="btn">Hire Me Now</a>
            </div>
            <div className="skill-right" >
            {
                skills.map(function(item){
                    return(
                        <div className="skill-right-divider" key={item.id}>
                            <div className="skill-right-divider-label" style={{width: `${item.percent}%`}}>
                                <div className="skill-right-divider-label-l">{item.name}</div>
                                <div className="skill-right-divider-label-r"> <span>{item.percent}%</span></div>
                            </div>
                            <progress value={item.percent} max="100"></progress>
                        </div>  
                    )
                })
            } 
            </div>
        </section>
    )
}




export default Skill ;