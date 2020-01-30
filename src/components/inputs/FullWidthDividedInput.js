import React, { Component } from 'react'

export default class FullWidthDividedInput extends Component {
    render() {
        return (
            <div className="input-full-divided-width">
                 <input className="input-small-width" placeholder={this.props.placeholder} value={this.props.value[0]}/> <span>|</span>
                 <input className="input-large-width" placeholder={this.props.placeholder} value={this.props.value[1]}/>
            </div>
        )
    }
}
