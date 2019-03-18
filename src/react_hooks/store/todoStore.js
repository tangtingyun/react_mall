import {observable, action, autorun, computed} from 'mobx';


class ToDoStore {
    @observable todos = []
    @observable pendingRequests = 0;

    constructor() {
        autorun(() => {
            console.log(this.report)
        })
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length
    }

    @computed get report() {
        if (this.todos.length === 0) {
            return "<none>";
        }
        var next = this.todos.find((element) => {
            return element.completed === false
        })
        next = next || {task: "ok"}
        return `Next todo: "${next.task}.` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    @action addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }

    @action cleanItem(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)

    }
}

export default new ToDoStore();
