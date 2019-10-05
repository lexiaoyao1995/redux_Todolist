import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import XJJ from "./Test2/XJJ";
import ToDoList from "./todolist/ToDoList";

ReactDOM.render(<ToDoList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//2019 国庆
serviceWorker.unregister();
