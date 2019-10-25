import React, {useReducer, useState} from 'react'
import produce from 'immer';
import {Button, Input, Card, message, Icon} from 'antd'
import 'antd/dist/antd.css';

function reducer (state, action) {
    switch (action.type) {
        case 'toggle':
            return produce(state, (draftState) => {
                draftState[action.payload].isCompleted
                    = !draftState[action.payload].isCompleted
            })
        case 'add':
            return produce(state, (draftState) => {
                draftState.push({label: action.payload})
            })
        case 'delete':
            return produce(state, (draftState) => {
                draftState.splice(action.payload, 1);
            })
        default:
            return state
    }
}

function Todo ({isCompleted, label, onChange, onDelete}) {
    return (<p style={{display: 'flex', justifyContent: 'space-between'}}>
        <label style={{
            textDecoration: isCompleted && 'line-through'
        }}>
            <input
                type="checkbox"
                checked={isCompleted || false}
                onChange={onChange}
            />
            <span>{label}</span>
        </label>
        <Icon type="delete" style={{cursor: 'pointer'}}
              onClick={onDelete}
        />
    </p>)
}

function ToDoList () {
    const todos = [
        {label: 'Do something'},
        {label: 'Buy dinner'}
    ]

    const [state, dispatch] = useReducer(reducer, todos)
    const [newTodo, setNewTodo] = useState('')
    return (
        <Card bordered={false} style={{width: 400, margin: 'auto', marginTop: 100}}>
            {state.map((todo, i) => (
                <Todo
                    key={i}
                    {...todo}
                    onChange={() => dispatch(
                        {type: 'toggle', payload: i}
                    )}
                    onDelete={() => dispatch(
                        {type: 'delete', payload: i}
                    )}
                />
            ))}
            <Input
                type="text"
                value={newTodo}
                style={{width: 280}}
                onChange={
                    (e) => setNewTodo(e.target.value)
                }
            />
            <Button style={{marginLeft: 10}} type="primary" onClick={() => {
                if (!newTodo) {
                    message.info('please input todo');
                    return
                }
                dispatch({type: 'add', payload: newTodo})
                setNewTodo('')
            }}>
                Add
            </Button>
        </Card>
    )
}

export default ToDoList;
