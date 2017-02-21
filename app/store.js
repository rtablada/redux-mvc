import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  (state, { type, ...action }) => {
    switch (type) {
      case 'SONGS@FETCH_STARTED':
        return {
          ...state,
          fetching: true,
        };
      case 'SONGS@UPDATE_MANY':
        return {
          ...state,
          fetching: false,
          songs: action.data,
        };
      default:
        return state;
    }
  },
  { songs: [], fetching: false },
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
