import { ADD_ROLE, REMOVE_ROLE } from '../action/type';

export default (state = [], { type = null, payload = null }) => {
  switch (type) {
    case ADD_ROLE:
      return [
        ...state,
        payload
      ];
    case REMOVE_ROLE:
      return [
        ...state.slice(0, state.indexOf(payload)),
        ...state.slice(state.indexOf(payload) + 1)
      ];
    default:
      return state;
  }
};
