import React from 'react'

export default function portfolio() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-05" title>
                                    <img alt='farmerboy' src="images/portfolio/farmerboy.jpg" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>H8 Bike Commpunity</h5>
                                            <p>Vue.js</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus" /></div>
                                </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-06" title>
                                    <img alt='girl' src="images/portfolio/girl.jpg" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Girl</h5>
                                            <p>Photography</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus" /></div>
                                </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-07" title>
                                    <img alt='origami' src="images/portfolio/origami.jpg" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Origami</h5>
                                            <p>Illustrration</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus" /></div>
                                </a>
                            </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                            <div className="item-wrap">
                                <a href="#modal-08" title>
                                    <img alt='retrocam' src="images/portfolio/retrocam.jpg" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Retrocam</h5>
                                            <p>Web Development</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus" /></div>
                                </a>
                            </div>
                        </div> {/* item end */}
                    </div> {/* portfolio-wrapper end */}
                </div> {/* twelve columns end */}
                {/* Modal Popup
                --------------------------------------------------------------- */}
                
                <div id="modal-05" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt='img' />
                    <div className="description-box">
                        <h4>H8 Bike Community</h4>
                        <p>Blog , Community and e-commerce web build with Vue.js</p>
                        <span className="categories"><i className="fa fa-tag" />Blog, Community</span>
                    </div>
                    <div className="link-box">
                        <a href="https://adishare.github.io/hacktivoverflow-1/">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-05 End */}
                <div id="modal-06" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt='img' />
                    <div className="description-box">
                        <h4>Girl</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Photography</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-06 End */}
                <div id="modal-07" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt='img' />
                    <div className="description-box">
                        <h4>Origami</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-07 End */}
                <div id="modal-08" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt='img' />
                    <div className="description-box">
                        <h4>Retrocam</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>{/* modal-01 End */}
            </div> {/* row End */}
        </section>
    )
}
