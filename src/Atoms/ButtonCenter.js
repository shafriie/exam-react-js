import { Button } from 'react-bootstrap'
import React, { Component } from 'react'

class ButtonCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'color': '#ab0303'
        }
    }

    render() {
        return (
            <div align="center">
            <Button style={{ background: this.state.color, borderColor: this.state.color }} type={this.props.type} size={this.props.size}>
                {this.props.buttonName}
            </Button>
        </div>
        )
    }
}
export default ButtonCenter