import {observable} from "mobx"

export default class ToDoItem {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}
