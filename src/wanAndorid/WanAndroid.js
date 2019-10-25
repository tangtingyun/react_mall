import React from 'react'
import './wanAndroid.css'
import Header from './component/Header.js'
import {renderRoutes} from "react-router-config";

function WanAndroid ({route}) {
    const child = renderRoutes(route.routes);
    return (
        <div className="wan-android">
            <Header/>
            {child}
        </div>
    )

}


export default WanAndroid