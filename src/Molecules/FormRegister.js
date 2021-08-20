import React, { Component } from 'react'
import { Card, Row, Col, Form, Jumbotron, Alert, InputGroup } from 'react-bootstrap'
import InputText from '../Atoms/InputText'
import ButtonBlock from '../Atoms/ButtonBlock'
import ButtonCenter from '../Atoms/ButtonCenter'
import ButtonLink from '../Atoms/ButtonLink'
import TextArea from '../Atoms/TextArea'
import RadioButton from '../Atoms/RadioButton'
import SelectDropdown from '../Atoms/SelectDropdown'

class FormRegister extends Component {
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
                                <InputText labelName="Nama Lengkap" nameAttr="input-nama"
                                    type="text" placeholder="Enter nama lengkap .." />

                                <InputText labelName="Email Address" nameAttr="input-email"
                                    type="email" placeholder="Enter email address .." />

                                <InputText labelName="Nomor Telepon" nameAttr="input-no_hp"
                                    type="text" placeholder="Enter nomor telepon .." />

                                <RadioButton pilihan={['Laki-laki','Perempuan']} labelName="Jenis Kelamin" nameAttr="input-gender"/>

                                {/* <SelectDropdown nameAttr="input-gender" labelName="Jenis Kelamin" combo={['Laki laki','Perempuan']}/> */}

                                <TextArea labelName="Alamat" nameAttr="input-alamat" placeholder="Enter alamat .." />

                                <ButtonBlock type="submit" size="lg" buttonName="Register" />
                                
                                <ButtonLink linkHref="/" name="Back to Login" nameAttr="btn-link" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default FormRegister