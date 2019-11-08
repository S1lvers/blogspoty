import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import ReduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        ReduxThunk,
        loggerMiddleware
    )
);