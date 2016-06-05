import createActions from '../../../src/action';

function dispatchCalledWith(store, type, payload) {
  return store.dispatch.calledWith({ type, payload });
}

describe('Action', () => {
  let actions;
  let store;

  beforeEach(() => {
    store = {
      dispatch: sinon.stub()
    };
    actions = createActions(store);
  });

  it('exposes addStory which call store.dispatch with type and payload', () => {
    const payload = 'foobar';
    actions.addStory(payload);
    assert.equal(dispatchCalledWith(store, 'ADD_STORY', payload), true);
  });
});
