import { ADD_STORY, REMOVE_STORY, REMOVE_STORIES } from '../../../src/action/type';
import storyReducer from '../../../src/reducer/story';

describe('Story Reducer', () => {
  it(`adds new story on ${ADD_STORY}`, () => {
    const state = ['foo'];
    const action = {
      type: ADD_STORY,
      payload: 'bar'
    };

    assert.deepEqual(storyReducer(state, action), ['foo', 'bar']);
  });

  it(`removes story on ${REMOVE_STORY}`, () => {
    const state = ['foo', 'bar'];
    const action = {
      type: REMOVE_STORY,
      payload: 'bar'
    };

    assert.deepEqual(storyReducer(state, action), ['foo']);
  });

  it(`removes stories on ${REMOVE_STORIES}`, () => {
    const state = ['foo', 'bar', 'any'];
    const action = {
      type: REMOVE_STORY,
      payload: ['foo', 'bar']
    };

    assert.deepEqual(storyReducer(state, action), ['any']);
  });
});
