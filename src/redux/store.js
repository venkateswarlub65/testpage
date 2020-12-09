import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginreducer from 'reducers';

const store=createStore(loginreducer,{}, applyMiddleware(thunk, logger));

export default store;