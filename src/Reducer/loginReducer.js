import { LOGIN } from '../Action/type';

const initialState = {
    // isResistered: false,
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }

}