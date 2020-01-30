import React, { Component } from 'react';

import BackButton from "../Assets/backbutton.svg";

export default class Header extends Component {
    render() {
        const {header}= this.props;
        return (
            <div>
                <div className="home-header">
                    <div className="header-div">
                        <button><img src={BackButton}/></button>
                        <span className="header-text" >{header}</span>
                    </div>
                </div>
            </div>
        )
    }
}
