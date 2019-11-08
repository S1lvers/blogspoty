import {combineReducers} from 'redux';
import applicationState from "./applicationState";
import authorizationState from "./authorizationState";



const rootReducer = combineReducers({
    applicationState,
    authorizationState
});

export default rootReducer;