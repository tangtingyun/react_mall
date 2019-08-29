import React, {useState, useEffect} from 'react'

function Counter () {
    const [count, setCount] = useState(0)

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
    },[])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Counter;