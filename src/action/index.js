import { ADD_STORY, REMOVE_STORY } from './type';

export default (dispatchWithObject) => {
  const dispatch = (type, payload) => dispatchWithObject({ type, payload });

  return {
    addStory: (payload) => dispatch(ADD_STORY, payload),
    removeStory: (payload) => dispatch(REMOVE_STORY, payload)
  };
};
