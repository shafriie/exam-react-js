import { Form } from 'react-bootstrap'

function TextArea(props) {
    return (
        <Form.Group controlId={props.nameAttr}>
            <Form.Label>{props.labelName}</Form.Label>
            <Form.Control required size="lg" as="textarea" name={props.nameAttr} placeholder={props.placeholder} rows={3} />
            <br />
        </Form.Group>
    )
}

export default TextArea