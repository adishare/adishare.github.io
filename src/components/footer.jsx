import React from 'react'

export default function footer() {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2018 adishare</li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                            className="icon-up-open" /></a>
                </div>
            </div>
        </footer>
    )
}
