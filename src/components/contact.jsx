import React, { Component } from 'react'
import firebase from '../settings/firebase'
import moment from 'moment'
import $ from 'jquery'

const db = firebase.database();

export default class contact extends Component {

    state = {
        contacts : {},
        
        // input
        name : '',
        email : '',
        message : ''
    }
    
    componentDidMount() {
        db.ref('/gh-pages/contacts').on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({
                    ...this.state,
                    contacts : Object.values(snapshot.val())
                })
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        $('#image-loader').fadeIn();

        let {name,email,message} = this.state
        db.ref(`/gh-pages/contacts/`).push({
            name,
            email,
            message,
            createdAt: moment(new Date()).format('DD-MMM-YY hh:mm')
        })
        .then(data => {
            console.log(data)
            $('#image-loader').fadeOut();
            $('#message-warning').hide();
            $('#contactForm').fadeOut();
            $('#message-success').fadeIn(); 
            this.setState({
                ...this.state,
                name : '',
                email : '',
                message : ''
            })
        })
        .catch(err => {
            console.log(err)
            $('#image-loader').fadeOut();
            $('#message-warning').html(err);
            $('#message-warning').fadeIn();
        })
    }

    render() {

        return (
            <section id="contact">

                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <h2 className="lead" style={{padding: 20}}>Contact
                        </h2>
                    </div>
                </div>


                <div className="row">
                    <div className="eight columns">
                        
                        <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="name">Name <span className="required">*</span></label>
                                    <input type="text" placeholder='Jhon Dhoe' value={this.state.name} onChange={this.handleChange} size={35} id="name" name="name" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input type="email" size={35} placeholder='your@mail.com' value={this.state.email} onChange={this.handleChange} id="email" name="email" />
                                </div>
                                <div>
                                    <label htmlFor="message">Message <span className="required">*</span></label>
                                    <textarea cols={50} rows={8} id="message" name="message" value={this.state.message} onChange={this.handleChange} />
                                    </div>
                                <div>
                                <button className="submit" type='submit'>Submit</button>
                                <span id="image-loader">
                                    <img alt='loader.gif' src="images/loader.gif" />
                                </span>
                                </div>
                            </fieldset>
                        </form> 
                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check" />Your message was sent, thank you!<br />
                        </div>
                    </div>

                    <aside className="four columns footer-widgets">
                
                        <div className="widget widget_tweets">
                            <h4 className="widget-title">Latest Tweets</h4>
                            <ul id="twitter">
                                {[...Object.values(this.state.contacts)].reverse().slice(0,5).map(item => {
                                    return (
                                        <li>
                                            <span>
                                                {item.message} <br/>
                                                {item.name} -<a>{ ' '+ item.email}</a>
                                            </span>
                                            <b><a>{ moment(item.createdAt).fromNow()}</a></b>
                                        </li>
                                    )
                                })}
                            
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}
