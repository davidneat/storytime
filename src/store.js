const defaultState = {
  stories: []
};

export default (createReduxStore, rootReducer, storage) => {
  const storageData = storage.getData();

  const initalState = {
    ...defaultState,
    ...storageData
  };

  return createReduxStore(rootReducer, initalState);
};
