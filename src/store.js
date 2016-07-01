import { createStore } from 'redux';

const initialState = {
  stories: [{ id: '123', role: 'user', text: 'foo' }]
};

export default (rootReducer) => createStore(rootReducer, initialState);
