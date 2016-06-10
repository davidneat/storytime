import { ADD_STORY } from '../../../src/action/type';
import storyReducer from '../../../src/reducer/story';

describe('Story Reducer', () => {
  it('adds new story on ADD_STORY', () => {
    const state = ['foo'];
    const action = {
      type: ADD_STORY,
      payload: 'bar'
    };

    assert.deepEqual(storyReducer(state, action), ['foo', 'bar']);
  });
});
