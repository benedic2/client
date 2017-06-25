import axios from 'axios';
import { BrowserRouter} from 'react-router-dom';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    FETCH_REVIEWS,
    CREATE_REVIEW,
    FETCH_REVIEW,
    FETCH_REVIEWS_LAUNCH_DATE,
    FETCH_REVIEWS_REVIEW_DATE,
    REVIEW_SEARCH,
    CLEAR_SEARCH,
    CREATE_COMMENT,
    FETCH_COMMENTS
} from './types';

const ROOT_URL = 'http://localhost:3090';
const ROOT_URL_SECURE = 'https://localhost:3090';

const authAxios = axios.create({
    headers: {authorization: localStorage.getItem('token')}
});

export function postNewComment(values, _id, user, callback) {
    const request = authAxios.post(`${ROOT_URL}/comment/${_id}/${user}`, values)
    .then((response) => callback());

    return {
        type: CREATE_COMMENT,
        payload: request
    };
}

export const fetchComments = (criteria) => {
    const request = axios.get(`${ROOT_URL}/comments/${criteria}`);
 
    return {
        type: FETCH_COMMENTS,
        payload: request
    }}

export function clearSearch() {
    return { type: CLEAR_SEARCH };
}

export function searchReviews (values){
    const request = axios.post(`${ROOT_URL}/review/search`, values)
    
    return {
        type: REVIEW_SEARCH,
        payload: request
    }; 

}

export const fetchReviews = (criteria) => {
    const request = axios.get(`${ROOT_URL}/reviews/${criteria}`);
    let actionType = "";

    switch(criteria) {
        case 'launchDate':
            actionType = FETCH_REVIEWS_LAUNCH_DATE;
            break;
        case 'reviewDate':
            actionType = FETCH_REVIEWS_REVIEW_DATE;
            break;    
        default:
            actionType = FETCH_REVIEWS;
            break;
                   };


return {
    type: actionType, 
    payload: request
}; 
}

export function fetchReview(_id) {
    const request = axios.get(`${ROOT_URL}/review/${_id}`);

    return {
        type: FETCH_REVIEW,
        payload: request
    }; 
}

export function postNewReview(values, callback) {
    const request = authAxios.post(`${ROOT_URL}/review_secretspot`, values)
    .then(() => callback());

    return {
        type: CREATE_REVIEW,
        payload: request
    };
}

export function signinUser(values, callback) {
    return function(dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, values)
            .then(response => {
            // If request is good...
            // - Update state to indicate user is authenticated
            dispatch({ type: AUTH_USER });
            // - Save the JWT token
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);
            // - redirect to the route '/feature'
        })
            .then(() => callback())
            .catch(error => {
            // If request is bad...
            // - Show an error to the user
            dispatch(authError('Bad Login Info'));
        });
    }
}

export function signupUser(values, callback) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, {"email":values.email,"password":values.password})
            .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user);            
        })
            .then(() => callback())
            .catch( error => {
            if (error.response) {
                // The request was made, but the server responded with a status code 
                // that falls out of the range of 2xx 
                dispatch(authError(error.response.data));
            } else {
                // Something happened in setting up the request that triggered an Error 
                console.log('Error', error.message);
                dispatch(authError(error.message));
            }
            console.log(error.config);
        });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { type: UNAUTH_USER };
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            });
        });
    }
}

