/**
 * Created by zhangyifei on 18/8/11.
 */

import  React from 'react'
import {observer} from "mobx-react";
import Todo from "../state/Todo.js"
import ToDoView from './ToDoView.js'

@observer
export default class Hello extends React.Component {

    constructor(props) {
        super(props)
        // for (let i = 0; i < 10; i++) {
        //     let todo = new Todo()
        //     todo.finished = false
        //     todo.title = "Hello Mobx"
        //     this.props.todoList.todos.push(todo)
        // }
    }

    tapMe = () => {
        let todo = new Todo()
        todo.finished = false
        todo.title = "Hello Mobx"
        this.props.todoList.todos.push(todo)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todoList.todos.map(todo => {
                            return (
                                <ToDoView todo={todo} key={todo.id}/>
                            )
                        })
                    }
                </ul>
                <div onClick={this.tapMe}>Click Me</div>
                Tasks left: {this.props.todoList.unfinishedTodoCount}
            </div>
        )
    }
}


