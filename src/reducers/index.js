import {combineReducers} from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer,
    authenticated: AuthenticationReducer
});

export default rootReducer;