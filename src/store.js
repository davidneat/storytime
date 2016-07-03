import * as redux from 'redux';

const defaultState = {
  stories: []
};

export default (rootReducer, storage) => {
  const storageData = storage.getData();

  const initalState = {
    ...defaultState,
    ...storageData
  };

  return redux.createStore(rootReducer, initalState);
};
