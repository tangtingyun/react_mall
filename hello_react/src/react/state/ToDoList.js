/**
 * Created by zhangyifei on 18/8/12.
 */

import {observable, computed, autorun} from "mobx"

export default class TodoList {
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        console.log("===call this=====")
        return this.todos.filter(todo => !todo.finished).length;
    }
}

autorun(function () {
    console.log("this call autorun")
})