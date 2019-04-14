import React from 'react'

export default function header(props) {

    let resumeData = props.resumeData;

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                    <h3>
                        I'm {resumeData.role}.{resumeData.roleDescription}
                    </h3>
                    <hr />
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/fathulqo/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/adishare"><i className="fa fa-github"/></a></li>
                        <li><a href="https://wa.me/6281211805303"><i className="fa fa-dribbble" /></a></li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header>
    )
}
