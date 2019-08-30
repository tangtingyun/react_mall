import React from 'react'
import './wanAndroid.css'
import Header from './component/Header.js'
import WanHome from './view/WanHome.js'
import WanCategory from './view/WanCategory.js'
import {Switch, Route, Redirect} from "react-router-dom";

function WanAndroid () {
    return (
        <div className="wan-android">
            <Header/>
            <Switch>
                <Redirect exact from='/' to='/wanHome'/>
                <Route path="/wanHome" component={WanHome}></Route>
                <Route path="/wanCategory" component={WanCategory}></Route>
            </Switch>
        </div>
    )

}


export default WanAndroid