import { ADD_STORY, REMOVE_STORY } from './type';

export default () => {
  const createAction = (type, payload) => ({ type, payload });

  return {
    addStory: (payload) => createAction(ADD_STORY, payload),
    removeStory: (payload) => createAction(REMOVE_STORY, payload)
  };
};
