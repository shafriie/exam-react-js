import React, {Component} from 'react'
import { Form } from 'react-bootstrap'
class InputText extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form.Group controlId={this.props.nameAttr}>
                <Form.Label>{this.props.labelName}</Form.Label>
                <Form.Control required size="lg" type={this.props.type} name={this.props.nameAttr} placeholder={this.props.placeholder} />
                <br />
            </Form.Group>
        )
    }
}

export default InputText