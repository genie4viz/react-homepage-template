/* File Name: contactus.js                                              *
 * Description: Contact jabooda homes                                   */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import PageBanner from '../pageBanner'

// Actions
import { handleSubmit } from '../../actions/contactUsActions'

// Design
import '../../../stylesheets/contactus.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class Contactus extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {    
    const padding = {
      paddingBottom: 50
    };

    return (
      <div>
        <PageBanner
          header="CONTACT US"
          image="house4.jpg"
        />

        <div style={padding} className="pageContent contactUsComponent">
          <p style={padding}>
            Have anything you'd like to let us know about? Please fill out the form with your information and we will get back to you shortly!
          </p>

          <p>* = Required</p><br/><br/>
          <form onSubmit = {(e) => this.props.dispatch(handleSubmit(e, this.state))}>
            <FormLabel>
              Name*<br/>
              <Input 
                type="text" 
                name="name" 
                onChange={this.handleChange}
                autoFocus="true" 
                required />
            </FormLabel>

            {/* AM - do this in CSS way */}
            <br/><br/>

            <FormLabel>
              Email*<br/>
              <Input 
                type="email" 
                name="email"
                onChange={this.handleChange} 
                required />
            </FormLabel>

            <br/><br/>

            <FormLabel>
              Subject*<br/>
              <Input 
                type="text" 
                name="subject"
                onChange={this.handleChange} 
                required />
            </FormLabel>

            <br/><br/>

            <FormLabel>
              Message*<br/>
              <textarea 
                name="message"
                onChange={this.handleChange} 
                required />
            </FormLabel>
            
            <br/><br/>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapDispatchToProps)(Contactus)