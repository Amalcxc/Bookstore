import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;