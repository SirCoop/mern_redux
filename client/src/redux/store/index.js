import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devTools-extension';
import rootReducer from '../reducers/index';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

/* 
  visual representation of a redux store

  const store = {
    state: {},            // state is an object
    listeners: [],        // listeners are an array of functions
    dispatch: () => {},   // dispatch is a function that dispatches an action object
    subscribe: () => {},  // subscribe is a function that allows subscribers to receive state
    getState: () => {},   // getState is a function
  }

  */