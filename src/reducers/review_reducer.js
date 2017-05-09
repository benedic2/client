import _ from 'lodash';

import{
    FETCH_REVIEWS,
    FETCH_REVIEW
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_REVIEWS:
            return _.mapKeys(action.payload.data, '_id');
        case FETCH_REVIEW:
            return {...state, [action.payload.data._id]:
                   action.payload.data };
        default:
            return state;
                       }
}