import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  (state, { type, ...action }) => {
    switch (type) {
      case 'SONGS@FINDALL_STARTED':
        return {
          ...state,
          fetching: true,
        };
      case 'SONGS@FINDALL_COMPLETE':
        return {
          ...state,
          fetching: false,
          songs: action.data,
        };
      case 'SONGS@CREATE_STARTED':
        return {
          ...state,
          fetching: true,
          songs: [...state.songs, action.data],
        };
      case 'SONGS@CREATE_SAVED':
        return {
          ...state,
          fetching: false,
          songs: state.songs.reduce((accum, curr) => {
            if (curr._id && curr._id !== action.data._id) {
              return [...accum, curr];
            }

            return [...accum, action.data];
          }, []),
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
