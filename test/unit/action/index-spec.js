import { ADD_STORY, REMOVE_STORY } from '../../../src/action/type';
import createActions from '../../../src/action';

describe('Action', () => {
  let actions;

  beforeEach(() => {
    actions = createActions();
  });

  it('exposes addStory which returns an object with type and payload', () => {
    const payload = 'foobar';
    assert.deepEqual(actions.addStory(payload), { type: ADD_STORY, payload });
  });


  it('exposes removeStory which returns an object with type and payload', () => {
    const payload = 'foobar';
    assert.deepEqual(actions.removeStory(payload), { type: REMOVE_STORY, payload });
  });
});
