import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link  }from 'react-router-dom'
import './index.css';
import App from './App';
import First from './view/index'
import List from './view/list'
import Detail from './view/detail'
import registerServiceWorker from './registerServiceWorker';
// function tick(){
    ReactDOM.render((
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">index</Link></li>
                <li><Link to="/fir">fir</Link></li>
                <li><Link to="/list">list</Link></li>
                <li><Link to="/list/det">Detail</Link></li>
            </ul>
            <App date={new Date()} name='sarry' />
            <Route path='/list' component={List} />
            <Route path='/fir' component={First} />
            <Route path='/list/det' component={Detail} />
        </div>
      </BrowserRouter>
    ), document.getElementById('root'));
// }
// setInterval(tick, 1000);
registerServiceWorker();
