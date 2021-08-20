import React, { Component } from "react"

class NotFound extends Component {
    componentDidMount() {
        document.querySelector('.titleHeading').innerHTML = '';
    }

    render() {
        return (
            <h1>Oppss , halaman yang anda tuju tidak ada !</h1>
        )
    }

}


export default NotFound