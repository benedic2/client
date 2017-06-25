import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import ReviewReducer from './review_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    comments: CommentReducer,
    reviews: ReviewReducer

});

export default rootReducer;
