export default (state = [], action = null) => {
  switch (action.type) {
    case 'ADD_STORY':
      return state.concat([action.text]);
    default:
      return state;
  }
};
