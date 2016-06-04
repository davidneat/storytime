export default (store) => {
  function addStory() {
    store.dispatch({
      type: 'ADD_STORY',
      text: 'bar'
    });
  }

  return {
    addStory
  };
};
