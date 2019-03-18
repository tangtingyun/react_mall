import React from "react"

import {Link, Route, Switch} from "react-router-dom"
import Other from "../fuli"
import IOS from "../ios"
import Android from "../android"
import "./main.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="top">
                    <Link className="tab" to="/android">android</Link>
                    <Link className="tab" to="/ios">ios</Link>
                    <Link className="tab" to="/other">福利</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Android}/>
                    <Route path="/android" component={Android}/>
                    <Route path="/ios" component={IOS}/>
                    <Route path="/other" component={Other}/>
                </Switch>
            </div>
        )

    }
}