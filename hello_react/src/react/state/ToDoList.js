/**
 * Created by zhangyifei on 18/8/12.
 */

import {observable, computed, action} from "mobx"

export class TodoList {
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        console.log("===call this=====")
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action insertTod(todo) {
        this.todos.push(todo);
    }
}

export default new TodoList();
