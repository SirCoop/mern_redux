import { combineReducers } from 'redux';
import sidebarReducers from './sidebarReducers';

export default combineReducers({
  ...sidebarReducers,
});


