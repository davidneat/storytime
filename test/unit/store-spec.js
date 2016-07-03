import createStore from '../../src/store';
import * as redux from 'redux';

describe('Store', () => {
  let sandbox;
  let storage;
  let rootReducer;
  let createReduxStore;
  let reduxStore;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    reduxStore = 'redux';
    rootReducer = 'reducer';
    createReduxStore = sandbox.stub(redux, 'createStore', () => reduxStore);
    storage = {
      getData: sandbox.stub()
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('calls createReduxStore with the rootReducer', () => {
    createStore(rootReducer, storage);
    assert.ok(createReduxStore.calledOnce);
    assert.ok(createReduxStore.calledWith(rootReducer));
  });

  it('returns the store', () => {
    const result = createStore(rootReducer, storage);
    assert.equal(result, reduxStore);
  });

  describe('processes the initalState and calls createReduxStore', () => {
    it('with default value for stories', () => {
      createStore(rootReducer, storage);
      const processedInitialState = createReduxStore.lastCall.args[1];
      assert.deepEqual(processedInitialState, { stories: [] });
    });

    it('with merged storage state', () => {
      storage.getData.returns({ stories: [{ id: '123' }], foo: 'bar' });

      createStore(rootReducer, storage);
      const processedInitialState = createReduxStore.lastCall.args[1];
      assert.deepEqual(processedInitialState, { stories: [{ id: '123' }], foo: 'bar' });
    });
  });
});
