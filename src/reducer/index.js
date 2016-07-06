import { combineReducers } from 'redux';
import createStoryReducer from './story';
import rolesReducer from './role';

export default (createId) => combineReducers({
  stories: createStoryReducer(createId),
  roles: rolesReducer
});
