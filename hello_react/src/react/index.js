/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import App from  "./page/main"
import androidStore from './stores/androidStore'
import { autorun } from "mobx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'mobx-react';

const rootElement = document.getElementById("root");
const stores = {
    androidStore
};

// autorun(function () {
//     console.log(`${todoStore.todos.length}`)
// })
ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, rootElement);

