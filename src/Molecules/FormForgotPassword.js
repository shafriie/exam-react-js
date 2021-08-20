import React, { Component } from 'react'
import { Card, Row, Col, Form, Jumbotron, Alert, InputGroup } from 'react-bootstrap'
import InputText from '../Atoms/InputText'
import ButtonBlock from '../Atoms/ButtonBlock'
import ButtonCenter from '../Atoms/ButtonCenter'
import ButtonLink from '../Atoms/ButtonLink'
import TextArea from '../Atoms/TextArea'
import RadioButton from '../Atoms/RadioButton'

class FormForgotPassword extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col xs lg="7">
                    <Card className="cardLogin">
                        <Card.Body>
                            <Form>
                                <InputText labelName="Email Address" nameAttr="input-email"
                                    type="email" placeholder="Enter email address .." />

                                <ButtonBlock type="submit" size="lg" buttonName="Send Link to Email" />
                                
                                <ButtonLink linkHref="/" name="Back to Login" nameAttr="btn-link" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default FormForgotPassword