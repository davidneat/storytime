import { createStore } from 'redux';

const defaultState = {
  stories: []
};

export default (rootReducer, storage) => {
  const storageData = storage.getData();

  const initalState = {
    ...defaultState,
    ...storageData
  };

  return createStore(rootReducer, initalState);
};
