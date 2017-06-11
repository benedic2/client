import _ from 'lodash';

import{
    FETCH_REVIEWS,
    FETCH_REVIEW,
    FETCH_REVIEWS_LAUNCH_DATE,
    FETCH_REVIEWS_REVIEW_DATE,
    REVIEW_SEARCH,
    CLEAR_SEARCH
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_REVIEWS:
            return _.mapKeys(action.payload.data, '_id');

        case FETCH_REVIEW:
            return {...state, [action.payload.data[0]._id]:
                    _.mapKeys(action.payload.data, '_id' )};

        case FETCH_REVIEWS_REVIEW_DATE:
            const list_reviewDate= _.mapKeys(action.payload.data, '_id');
            return {...state, reviewDate:list_reviewDate};    

        case FETCH_REVIEWS_LAUNCH_DATE:
            const list_launchDate= _.mapKeys(action.payload.data, '_id');
            console.log(action.payload);
            return {...state, launchDate:list_launchDate};

        case REVIEW_SEARCH:
            const search_results = _.mapKeys(action.payload.data, '_id');
            console.log(action.payload);
            return {...state, searchResults:search_results};
            
        case CLEAR_SEARCH:
            console.log('clearing');
            return{...state, searchResults:{}};

        default:
            return state;
                       }
}