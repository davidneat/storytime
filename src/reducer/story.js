import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../action/type';

const removeStoryFromState = (story, state) => {
  const storyIndex = state.indexOf(story);
  if (storyIndex === -1) return state;
  return [
    ...state.slice(0, state.indexOf(story)),
    ...state.slice(state.indexOf(story) + 1)
  ];
};

export default (state = [], action = null) => {
  switch (action.type) {
    case ADD_STORY:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_STORY:
      return removeStoryFromState(action.payload, state);
    case REMOVE_STORIES:
      action.payload.map((story) => (state = removeStoryFromState(story, state)));
      return state;
    default:
      return state;
  }
};
