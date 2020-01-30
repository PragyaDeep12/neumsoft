import React, { Component } from 'react'

export default class FullWidthInput extends Component {
    render() {
        return (
            <div>
                <input className="input-full-width" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}
