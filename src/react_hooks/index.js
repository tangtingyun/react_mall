/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import todoStore from './store/todoStore'
import {Provider} from 'mobx-react';
import ToDoList from "./components/todo-list"
import Index from "./components/window-width"

const rootElement = document.getElementById("root");
const stores = {
    todoStore
};

ReactDOM.render(
    <Index/>, rootElement);

