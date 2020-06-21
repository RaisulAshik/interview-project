import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    loginReducer: loginReducer,
    errors: errorsReducer
});