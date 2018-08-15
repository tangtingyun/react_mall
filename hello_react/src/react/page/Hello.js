/**
 * Created by zhangyifei on 18/8/11.
 */

import React from 'react'
import {observer, inject} from "mobx-react";
import Todo from "../state/Todo.js"
import ToDoView from './ToDoView.js'

@inject('todoStore')
@observer
export default class Hello extends React.Component {

    constructor(props) {
        super(props)
    }

    tapMe = () => {
        let todo = new Todo()
        todo.finished = false
        todo.title = "Hello Mobx"
        this.props.todoStore.insertTod(todo)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todoStore.todos.map(todo => {
                            return (
                                <ToDoView todo={todo} key={todo.id}/>
                            )
                        })
                    }
                </ul>
                <div onClick={this.tapMe}>Click Me</div>
                Tasks left: {this.props.todoStore.unfinishedTodoCount}
            </div>
        )
    }
}


