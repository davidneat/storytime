import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../action/type';

export default (state = [], action = null) => {
  switch (action.type) {
    case ADD_STORY:
      return state.concat([action.payload]);
    case REMOVE_STORY:
      state.splice(state.indexOf(action.payload), 1);
      return state;
    case REMOVE_STORIES:
      action.payload.map((story) => state.splice(state.indexOf(story), 1));
      return state;
    default:
      return state;
  }
};
