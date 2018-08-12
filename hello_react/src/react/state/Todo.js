/**
 * Created by zhangyifei on 18/8/11.
 */

import {observable, computed} from "mobx"


export default class Todo {
    id = Math.random()
    @observable title = "";
    @observable finished = false;
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}