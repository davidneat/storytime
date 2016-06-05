
export default (store) => {
  const dispatch = (type, payload) => store.dispatch({ type, payload });

  return {
    addStory: (payload) => dispatch('ADD_STORY', payload)
  };
};
