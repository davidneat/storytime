import createActions from '../../../src/action';

function createDispatchCalledWith(store) {
  return (type, payload) => store.dispatch.calledWith({ type, payload });
}

describe('Action', () => {
  let actions;
  let store;
  let dispatchCalledWith;

  beforeEach(() => {
    store = {
      dispatch: sinon.stub()
    };
    dispatchCalledWith = createDispatchCalledWith(store);
    actions = createActions(store);
  });

  it('exposes addStory which call store.dispatch with type and payload', () => {
    const payload = 'foobar';
    actions.addStory(payload);
    assert.equal(dispatchCalledWith('ADD_STORY', payload), true);
  });
});
