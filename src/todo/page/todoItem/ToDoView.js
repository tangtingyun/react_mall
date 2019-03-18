import React from "react";
import {observer} from "mobx-react";

@observer
export default class ToDoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename}>
                <input type='checkbox'
                       checked={todo.completed}
                       onChange={this.onToggleCompleted}/>
                {todo.task}
                {todo.assignee
                    ? <small>{todo.assignee.name}</small> :
                    null}
                <span onClick={this.onClean}>     clean</span>
            </li>
        )
    }

    onClean = () => {
        this.props.store.cleanItem(this.props.todo)
    }
    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed
    }
    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task Name', todo.task) || todo.task
    }
}