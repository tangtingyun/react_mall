import React from 'react';

function MapPage () {
    let todos = [
        {body: 'Learn React Fundamentals', done: true},
        {body: 'Build a TODOs App', done: false},
        {body: 'Build a Game', done: false},
    ];
    return (
        <div>
            <ul>
                {todos.map((todo, index) =>
                    <li key={index}>{todo.body}</li>
                )}
            </ul>
        </div>
    );
}

export default MapPage;
