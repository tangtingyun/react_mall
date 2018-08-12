/**
 * Created by zhangyifei on 18/8/11.
 */

import React from "react";
import ReactDOM from "react-dom";
import Hello from "./page/Hello.js"
import TodoList from './state/ToDoList.js'

const rootElement = document.getElementById("root");

const store = new TodoList()
ReactDOM.render(<Hello todoList={store}/>, rootElement);