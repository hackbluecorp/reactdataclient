import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Create from './components/Create';
import Appcss from './App.css'
import {
    BrowserRouter,
    Switch,
  } from "react-router-dom";
  

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(    
    <Router basename={process.env.PUBLIC_URL}>        
        <div>

                <Route exact path='/' component={App} />
                <Route path='/create' component={Create} />

        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//registerServiceWorker();
