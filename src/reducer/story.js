import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../action/type';

const removeStoryFromState = (story, state) => {
  if (state.indexOf(story) !== -1) {
    state.splice(state.indexOf(story), 1);
  }
  return state;
};

export default (state = [], action = null) => {
  switch (action.type) {
    case ADD_STORY:
      return state.concat([action.payload]);
    case REMOVE_STORY:
      return removeStoryFromState(action.payload, state);
    case REMOVE_STORIES:
      action.payload.map((story) => removeStoryFromState(story, state));
      return state;
    default:
      return state;
  }
};
