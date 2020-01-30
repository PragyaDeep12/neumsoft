import React, { Component } from "react";
import Header from "../../components/Header";
import VerificationInput from "../../components/inputs/VerificationInput";
export default class VerifyCode extends Component {
  render() {
    return (
      <div>
        <Header header="Verify Mobile Number" />
        <div className="body-div">
          <div className="body-header">
            <span className="body-header-text"><strong>Enter Verification Code</strong></span>
            <p className="body-text">
            Enter the verification code send to your mobile number +966 86322 73221
            </p>
            <VerificationInput/>
            <p className="body-text">Didn't recieve code?</p>
            <div className="resend-verification-code">Resend Verification Code</div>
          </div>
        </div>
      </div>
    );
  }
}
