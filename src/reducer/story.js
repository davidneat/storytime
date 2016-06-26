import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../action/type';

const removeStoryFromState = (story, state) => {
  const storyIndex = state.map(x => x.id).indexOf(story.id);
  if (storyIndex === -1) return state;
  return [
    ...state.slice(0, storyIndex),
    ...state.slice(storyIndex + 1)
  ];
};

let storyId = 0;

export default (state = [], action = null) => {
  switch (action.type) {
    case ADD_STORY:
      storyId++;
      return [
        ...state,
        { id: storyId, text: action.payload }
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
