import { combineReducers } from 'redux';
import { KEY_REDUCER as KEY_MAIN_VIEW, reducer as mainViewReducer } from '../MainView';

export default combineReducers({
  [KEY_MAIN_VIEW]: mainViewReducer,
});
