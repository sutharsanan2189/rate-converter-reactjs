import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Browser router
import {BrowserRouter as Router } from 'react-router-dom'  
//  Router to keep UI Sync with URL, it uses HTML5 history api.

ReactDOM.render(
    <Router>
        <App/>
    </Router>
,document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
