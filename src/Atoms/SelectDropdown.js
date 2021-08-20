import React from "react"
import { Form } from 'react-bootstrap'

function SelectDropdown(props) {
    return (
        <React.Fragment>
            <Form.Group controlId={props.nameAttr}>
                <Form.Label>{props.labelName}</Form.Label>
                <Form.Control size="lg" as="select" defaultValue="Pilih" required>
                    <option value="">Pilih</option>
                    {props.combo.map((jams) => {
                        return (
                            <option value={jams}>{jams}</option>)
                    })}
                </Form.Control>
            </Form.Group>
            <br />
        </React.Fragment>

    )
}

export default SelectDropdown