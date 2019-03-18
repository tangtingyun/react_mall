import React, {useState, useReducer} from 'react'
import {observer, inject} from "mobx-react";
import produce from 'immer'

function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return produce(state, (draftState) => {
                draftState[action.payload].isCompleted =
                    !draftState[action.payload].isCompleted
            })
        case 'add':
            return produce(state, (draftState) => {
                draftState.push({label: action.payload})
            })
        default:
            return state;
    }

}


function ToDo({isCompleted, label, onChange}) {
    console.log(label)
    return (
        <p>
            <label style={{
                textDecoration: isCompleted && 'line-through'
            }}>
                <input
                    type="checkbox"
                    checked={isCompleted || false}
                    onChange={onChange}/>
                <span>{label}</span>
            </label>
        </p>
    )
}


function ToDoList() {
    const todos = [
        {label: 'Do something'},
        {label: 'Buy dinner'}
    ]

    const [state, dispatch] = useReducer(reducer, todos)
    const [newTodo, setNewTodo] = useState('')
    console.log(state)
    return (
        <div>
            {
                state.map((todo, i) => {
                    return (
                        <ToDo
                            key={i}
                            {...todo}
                            onChange={() => {
                                dispatch({type: 'toggle', payload: i})
                            }}
                        />
                    )
                })
            }

            <input type="text"
                   value={newTodo}
                   onChange={(e) => setNewTodo(e.target.value)}/>
            <button
                onClick={() => {
                    dispatch({type: 'add', payload: newTodo})
                    setNewTodo('')
                }}
            >Add
            </button>
        </div>
    )
}

export default ToDoList

// export default inject("todoStore")(observer(ToDoList))