import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MapPage from './page/mapPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MapPage/>, document.getElementById('root'));

// ReactDOM.render(
//     React.createElement(
//         'div',
//         null,
//         'Hello React',
//     ),
//     document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
