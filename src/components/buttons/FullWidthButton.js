import React, { Component } from 'react'

export default class FullWidthButton extends Component {
    render() {
        return (
            <div>
                <button className="full-width-button" onClick={this.props.submit} >{this.props.value}</button>
            </div>
        )
    }
}
