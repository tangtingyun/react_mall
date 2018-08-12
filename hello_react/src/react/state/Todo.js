/**
 * Created by zhangyifei on 18/8/11.
 */

import {observable} from "mobx"


export default class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}

