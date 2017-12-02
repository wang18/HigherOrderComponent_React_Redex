import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CreateAppStore from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreatePost from './components/create_post';
import PostShow from './components/post_show';
import Resource from './components/resourse';
import Header from './components/header';
import requireAuth from './components/require_authentication';
const AppStore = CreateAppStore();

ReactDOM.render(
    <Provider store={AppStore}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/post/:id' component={PostShow}/>
                    <Route path='/create_post' component={CreatePost}/>
                    <Route path='/resource' component={requireAuth(Resource)}/>
                    <Route path='/' component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,document.getElementById('root'));


registerServiceWorker();
