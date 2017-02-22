import { combineReducers } from 'redux';

import songs from './reducers/songs';
import fetching from './reducers/fetching';

export default combineReducers({
  songs,
  fetching
});
