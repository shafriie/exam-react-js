import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageLogin from './Pages/Login'
import PageRegister from './Pages/Register'
import PageForgotPassword from './Pages/ForgotPassword'
import NotFound from './Pages/NotFound'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'title': 'Web App Booking Online with React JS'
        }
    }

    render() {
        return (
            <Container>
                <Router>
                    <br />
                    <h1 className="titleHeading" align="center" style={{ fontFamily: 'Arial Black' }}>{this.state.title}</h1>

                    <Switch>
                        <Route exact path="/">
                            <PageLogin />
                        </Route>
                        <Route path="/register">
                            <PageRegister />
                        </Route>
                        <Route path="/forgot-password">
                            <PageForgotPassword />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Container>
        )
    }
}

export default App