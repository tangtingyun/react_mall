/**
 * Created by zhangyifei on 18/8/11.
 */

import React from 'react'
import {observer, inject} from "mobx-react";
import ToDoItem from "../stores/todoStore/item.js"
import Item from './Item.js'

@inject('todoStore')
@observer
export default class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    tapMe = () => {
        let todo = new ToDoItem()
        todo.finished = false
        todo.title = "Todo Mobx"
        this.props.todoStore.insertTod(todo)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todoStore.todos.map(todo => {
                            return (
                                <Item todo={todo} key={todo.id}/>
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


