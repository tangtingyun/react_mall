import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WanAndroid from './wanAndorid/WanAndroid';
import {BrowserRouter as Router} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <WanAndroid/>
    </Router>
    , document.getElementById('root'));

// ReactDOM.render(
//     React.createElement(
//         'div',
//         null,
//         'Hello React',
//     ),
//     document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
