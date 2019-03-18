/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./page/todoList/TodoList"
import todoStore from './store/todoStore'

import {Provider} from 'mobx-react';

import {Example} from "./page/hooks/Example"

const rootElement = document.getElementById("root");
const stores = {
    todoStore
};

ReactDOM.render(
    <Example/>, rootElement);
// ReactDOM.render(
//     <Provider {...stores}>
//         <TodoList/>
//     </Provider>, rootElement);

