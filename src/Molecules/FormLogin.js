import React, { Component } from 'react'
import { Card, Row, Col, Form, Jumbotron, Alert } from 'react-bootstrap'
import InputText from '../Atoms/InputText'
import ButtonBlock from '../Atoms/ButtonBlock'
import ButtonCenter from '../Atoms/ButtonCenter'
import ButtonLink from '../Atoms/ButtonLink'

class FormLogin extends Component {
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
                                <InputText labelName="Username" nameAttr="input-username"
                                    type="text" placeholder="Enter username .." />
                                <InputText labelName="Password" nameAttr="input-password"
                                    type="password" placeholder="Enter password .." />
                                <ButtonBlock type="submit" size="lg" buttonName="Login" />
                                <ButtonLink linkHref="/forgot-password" name="Lupa Kata Sandi?" nameAttr="btn-link" />
                                <ButtonLink linkHref="/register" name="Buat Akun Baru" nameAttr="btn-link" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default FormLogin