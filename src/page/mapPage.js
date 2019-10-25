import React from 'react';

import axios from 'axios'

function MapPage (props) {
    let todos = [
        {body: 'Learn React Fundamentals', done: true},
        {body: 'Build a TODOs App', done: false},
        {body: 'Build a Game', done: false},
    ];


    const jump = function () {
        props.history.push("/counter")

        // axios.get('/api/today').then(res => {
        //
        // })

    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) =>
                    <li onClick={jump} key={index}>{todo.body}</li>
                )}
            </ul>
            <div className="pseudo-class"></div>
            <ul>
                <li className="descen-class">你之所以是你</li>
                <li>悲伤是一种非常普遍的情绪</li>
                <li>被抛弃也很合理</li>
                <li>不是哭泣</li>
            </ul>
            <div>
                <span>aaaaa</span>
                <p>This text isn't selected.</p>
                <p>This text isn't selected.</p>
                <p>This text isn't selected.</p>
            </div>

            <div>
                <h3>hello</h3>
            </div>
        </div>
    );
}

export default MapPage;
