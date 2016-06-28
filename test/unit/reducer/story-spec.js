import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../../../src/action/type';
import createStoryReducer from '../../../src/reducer/story';

describe('Story Reducer', () => {
  let storyReducer;
  let createId;
  let storyId;

  beforeEach(() => {
    storyId = 'random-hash';
    createId = sinon.stub().returns(storyId);
    storyReducer = createStoryReducer(createId);
  });

  it(`adds new story on ${ADD_STORY}`, () => {
    const state = [{ id: 'foo', role: 'developer', text: 'foo' }];
    const action = {
      type: ADD_STORY,
      payload: {
        role: 'user',
        text: 'bar'
      }
    };

    assert.deepEqual(storyReducer(state, action), [
      { id: 'foo', role: 'developer', text: 'foo' },
      { id: storyId, role: 'user', text: 'bar' }
    ]);
  });

  it(`removes story on ${REMOVE_STORY}`, () => {
    const state = [{ id: 0, text: 'foo' }, { id: 1, text: 'bar' }];
    const action = {
      type: REMOVE_STORY,
      payload: { id: 1, text: 'bar' }
    };

    assert.deepEqual(storyReducer(state, action), [{ id: 0, text: 'foo' }]);
  });

  it(`removes stories on ${REMOVE_STORIES}`, () => {
    const state = [{ id: 0, text: 'foo' }, { id: 1, text: 'bar' }, { id: 2, text: 'any' }];
    const action = {
      type: REMOVE_STORIES,
      payload: [{ id: 0, text: 'foo' }, { id: 1, text: 'bar' }, { id: 3, text: 'other' }]
    };

    assert.deepEqual(storyReducer(state, action), [{ id: 2, text: 'any' }]);
  });
});
