import createStore from '../../src/store';

describe('Store', () => {
  let storage;
  let rootReducer;
  let createReduxStore;
  let reduxStore;

  beforeEach(() => {
    reduxStore = 'redux';
    createReduxStore = sinon.stub().returns(reduxStore);
    rootReducer = 'reducer';
    storage = {
      getData: sinon.stub()
    };
  });

  it('calls createReduxStore with the rootReducer', () => {
    createStore(createReduxStore, rootReducer, storage);
    assert.ok(createReduxStore.calledOnce);
    assert.ok(createReduxStore.calledWith(rootReducer));
  });

  it('returns the store', () => {
    const result = createStore(createReduxStore, rootReducer, storage);
    assert.equal(result, reduxStore);
  });

  describe('processes the initalState and calls createReduxStore', () => {
    it('with default value for stories', () => {
      createStore(createReduxStore, rootReducer, storage);
      const processedInitialState = createReduxStore.lastCall.args[1];
      assert.deepEqual(processedInitialState, { stories: [] });
    });

    it('with merged storage state', () => {
      storage.getData.returns({ stories: [{ id: '123' }], foo: 'bar' });

      createStore(createReduxStore, rootReducer, storage);
      const processedInitialState = createReduxStore.lastCall.args[1];
      assert.deepEqual(processedInitialState, { stories: [{ id: '123' }], foo: 'bar' });
    });
  });
});
