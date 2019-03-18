/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./page/todoList/TodoList"
import todoStore from './store/todoStore'

import {Provider} from 'mobx-react';

const rootElement = document.getElementById("root");
const stores = {
    todoStore
};


ReactDOM.render(
    <Provider {...stores}>
        <TodoList/>
    </Provider>, rootElement);

