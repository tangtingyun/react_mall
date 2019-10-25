import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WanAndroid from './wanAndorid/WanAndroid';
import {BrowserRouter as Router} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import Counter from './page/Counter'
import WanHome from './wanAndorid/view/WanHome.js'
import WanCategory from './wanAndorid/view/WanCategory.js'
import ToDoList from './hookTodo'

import * as serviceWorker from './serviceWorker';

const routes = [
    {
        path: "/counter",
        component: Counter
    },
    {
        path: "/todoList",
        component: ToDoList
    },
    {
        component: WanAndroid,
        routes: [
            {
                path: "/",
                exact: true,
                component: WanHome
            },
            {
                path: "/wanHome",
                exact: true,
                component: WanHome
            },
            {
                path: "/wanCategory",
                component: WanCategory,
            }
        ]
    }
];

ReactDOM.render(
    <Router>
        {renderRoutes(routes)}
    </Router>,
    document.getElementById('root')
)

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
