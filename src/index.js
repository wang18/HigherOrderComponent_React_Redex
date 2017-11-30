import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CreateAppStore from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppStore = CreateAppStore();

ReactDOM.render(
    <Provider store={AppStore}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>,document.getElementById('root'));


registerServiceWorker();
