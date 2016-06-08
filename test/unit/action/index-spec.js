import { ADD_STORY } from '../../../src/action/type';
import createActions from '../../../src/action';

function createDispatchCalledWith(dispatch) {
  return (type, payload) => dispatch.calledWith({ type, payload });
}

describe('Action', () => {
  let actions;
  let dispatchCalledWith;
  let dispatch;

  beforeEach(() => {
    dispatch = sinon.stub();
    dispatchCalledWith = createDispatchCalledWith(dispatch);
    actions = createActions(dispatch);
  });

  it('exposes addStory which call store.dispatch with type and payload', () => {
    const payload = 'foobar';
    actions.addStory(payload);
    assert.equal(dispatchCalledWith(ADD_STORY, payload), true);
  });
});
