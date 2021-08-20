import { Button } from 'react-bootstrap'
import React, { Component } from 'react'

class ButtonBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'color': '#ab0303'
        }
    }

    render() {
        return (
            <div className="d-grid gap-2">
                <Button style={{ background: this.state.color, borderColor: this.state.color }} type={this.props.type} size={this.props.size}>
                    {this.props.buttonName}
                </Button>
                <br />
            </div>
        )
    }
}
export default ButtonBlock