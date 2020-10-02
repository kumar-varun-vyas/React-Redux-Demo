import BookReducer from './book/bookReducer'
import logger from 'redux-logger';
import {createStore, applyMiddleware} from  'redux';

const Store = createStore(BookReducer, applyMiddleware(logger));


export default Store;

