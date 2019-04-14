import React from 'react'

export default function resume(props) {

    let { educations, works, skills } = props.resumeData

    return (
        <section id="resume">
            {/* Education
            ----------------------------------------------- */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {educations.map(edu => {
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3> {edu.institution} </h3>
                                    <p className="info"> {edu.area} <span>•</span> <em className="date">{edu.year}</em></p>
                                    <p>
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
            ----------------------------------------------- */}
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">


                    {works.map(work => {
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{work.institution}</h3>
                                    <p className="info">{work.area} <span>•</span> <em className="date"> {work.year} </em></p>
                                    <p>
                                        {work.description}
                                    </p>
                                </div>
                            </div> 
                        )
                    })}

                    
                </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
            ----------------------------------------------- */}
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p> .
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skills.map(skill => {
                                return (
                                    <li><span className="bar-expand photoshop" style={{width : skill.level}} /><em>{skill.name}</em></li>
                                )
                            })}
          
                        </ul>
                    </div>{/* end skill-bars */}
                </div> {/* main-col end */}
            </div> {/* End skills */}
        </section>
    )
}
