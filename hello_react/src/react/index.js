/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import Hello from "./page/Hello.js"
import todoStore from './state/ToDoList.js'
import {autorun} from "mobx";

import {Provider} from 'mobx-react';

const rootElement = document.getElementById("root");
const stores = {
    todoStore
};


autorun(function () {
    console.log(`${todoStore.todos.length}`)
})
ReactDOM.render(
    <Provider {...stores}>
        <Hello/>
    </Provider>, rootElement);