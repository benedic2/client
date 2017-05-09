import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import ReviewReducer from './review_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    reviews: ReviewReducer
});

export default rootReducer;
