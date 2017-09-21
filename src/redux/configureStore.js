import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerReducer, routerMiddleware} from 'react-router-redux'
import listReducer from '../reducers/listReducer';

export default function (initialState = {}, history) {
    const rootReducer = combineReducers({
        counter: listReducer, routing: routerReducer
    });
    return createStore(rootReducer, initialState, applyMiddleware(thunk, routerMiddleware(history), createLogger()));
}