import { ADD_STORY, REMOVE_STORY } from '../../../src/action/type';
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

  it('exposes addStory which calls store.dispatch with type and payload', () => {
    const payload = 'foobar';
    actions.addStory(payload);
    assert.equal(dispatchCalledWith(ADD_STORY, payload), true);
  });


  it('exposes removeStory which calls store.dispatch with type and payload', () => {
    const payload = 'foobar';
    actions.removeStory(payload);
    assert.equal(dispatchCalledWith(REMOVE_STORY, payload), true);
  });
});
