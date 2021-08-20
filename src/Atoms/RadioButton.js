import React from 'react'
import { Form } from 'react-bootstrap'

function RadioButton(props) {
    return (
        <React.Fragment>
            <Form.Group controlId={props.nameAttr}>
                <Form.Label>{props.labelName}</Form.Label>
                <br />
                {props.pilihan.map((res, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Form.Check key={index} inline type="radio" name={props.nameAttr} label={res} id={res} />
                        </React.Fragment>
                    )
                })}


            </Form.Group>
            <br />

        </React.Fragment>

    )
}

export default RadioButton