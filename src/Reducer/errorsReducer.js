import {GET_ERRORS} from '../Action/type';
const initialState = {
    // pending:false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return  {
                ...state,
                // pending:false,
               errors:action.payload
            }
        default:
            return state;
    }
// return {
//     ...state,
//     user: action.payload
// };
}
export const getError=state=>state.error;