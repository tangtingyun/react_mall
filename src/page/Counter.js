import React, {useState, useEffect, useReducer} from 'react'

const initialState = {count: 0};

function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }

}

function Counter () {
    const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)

    let timerId = undefined
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    useEffect(() => {
        timerId = setInterval(() => {
            console.log(Date())
        }, 3000)

        return () => {
            timerId && clearInterval(timerId)
        }
    }, [])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <div>
                <br/>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
            </div>

        </div>
    )
}

export default Counter;