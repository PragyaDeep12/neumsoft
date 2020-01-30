import React, { Component } from 'react'
import Header from '../../components/Header'
import FullWidthInput from '../../components/inputs/FullWidthInput'
import FullWidthDividedInput from '../../components/inputs/FullWidthDividedInput'
import FullWidthButton from '../../components/buttons/FullWidthButton'

export default class RegisterAccount extends Component {
    render() {
        return (
            <div>
            <Header header="Register Account" />
            <div className="body-div">
              <div className="body-header">
                <span className="body-header-text"><strong>Create an Account</strong></span>
                <p className="body-text">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>
                <p/>
                <FullWidthInput placeholder="Enter Full Name"/>
                <FullWidthDividedInput placeholder="Enter Mobile Number" value={['+966']}/>
                <FullWidthInput placeholder="Enter Email id"/>
                <FullWidthButton value="Proceed"/>
              </div>
            </div>
          </div>
        )
    }
}
