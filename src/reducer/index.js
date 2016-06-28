import { combineReducers } from 'redux';
import createStoryReducer from './story';

export default (createId) => combineReducers({
  stories: createStoryReducer(createId)
});
