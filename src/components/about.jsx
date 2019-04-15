import React from 'react'

export default function about() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic2.jpeg" alt='profilepic2' />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>I’m a web and mobile developer living in Indonesia, I spend my days with my hands in many different areas of web development from back end programming (Express/Node, Django/Python) to front end engineering (jQuery, Vue, React ), digital accessibility, user experience and visual design.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Fathul Qorib Alaudit</span><br />
                                <span>Padasuka, Cimenyan<br />
                                    Bandung, Indonesia
                                </span><br />
                                <span>0812-1180-5303</span><br />
                                <span>adie.share@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="resume.pdf" className="button" download='CV - Fathul Qorib A.pdf'><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
        </section>
    )
}
