import { Form, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

function ButtonLink(props) {
    return (
        <Form.Group controlId={props.nameAttr}>
            <Nav.Link as={Link} to={props.linkHref}>{props.name}</Nav.Link>
        </Form.Group>
    )
}

export default ButtonLink