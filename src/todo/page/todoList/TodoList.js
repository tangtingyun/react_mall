import React from "react"
import {observer, inject} from "mobx-react";
import '../todoItem/TodoView'
import ToDoView from "../todoItem/ToDoView";

@inject('todoStore')
@observer
export default class TodoList extends React.Component {

    onNewTodo = () => {
        var task = prompt('Enter a new todo:',
            'coffee');
        if (task) {
            this.props.todoStore.addTodo(task)
        }
    }

    render() {
        const store = this.props.todoStore
        return (
            <div>
                {store.report}
                <ul>
                    {
                        store.todos.map(function (todo, index) {
                            return (
                                <ToDoView store={store} todo={todo} key={index}/>
                            )
                        })
                    }
                </ul>
                {store.pendingRequests > 0 ? <marquee>Loading....</marquee> : null}
                <button onClick={this.onNewTodo}>New Todo</button>
                <small>(double-click a todo toe dit)</small>
            </div>

        )
    }
}

