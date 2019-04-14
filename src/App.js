import React, { Component } from 'react';

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from  './components/testimonial';
import ContactUs from './components/contact';
import Footer from './components/footer';

import resumeData from './resumeData';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData} />
                <About />
                <Resume resumeData={resumeData} />
                <Portfolio />
                <Testimonials />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default App;