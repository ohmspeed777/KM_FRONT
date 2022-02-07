import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import unitReducer from './unitReducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
  form: formReducer,
  projects: projectReducer,
  units: unitReducer,
});
