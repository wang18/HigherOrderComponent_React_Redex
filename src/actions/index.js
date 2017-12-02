import {FETCH_POSTS,FETCH_POST, CREATE_POST, DELETE_POST, CHANGE_AUTH} from './type_constants';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=mimi123';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);
    return {
        type :FETCH_POST,
        payload: request
    };
}

export function deletePost(id,callback) {
    const request = axios
        .delete(`${ROOT_URL}/${id}/${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}${API_KEY}`, values).then(()=> callback());
    return {
        type: CREATE_POST,
        payload:request
    };
}

export function authenticate(isLoggedIn) {
    return{
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}