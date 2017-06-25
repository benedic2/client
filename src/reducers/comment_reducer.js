import _ from 'lodash';

import{
    FETCH_COMMENTS,
    CREATE_COMMENT
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {

        case FETCH_COMMENTS:
            const list_comments= _.mapKeys(action.payload.data, '_id');
            return {...state, comment_list:list_comments};    
            
        case CREATE_COMMENT:
            return{...state, newest: action.payload};
 
        default:
            return state;
                       }
}