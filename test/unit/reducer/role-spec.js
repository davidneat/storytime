import { ADD_ROLE, REMOVE_ROLE } from '../../../src/action/type';
import roleReducer from '../../../src/reducer/role';

describe('Role Reducer', () => {
  it(`adds new role on ${ADD_ROLE}`, () => {
    const state = ['developer'];
    const action = {
      type: ADD_ROLE,
      payload: 'user'
    };

    assert.deepEqual(roleReducer(state, action), ['developer', 'user']);
  });

  it(`removes role on ${REMOVE_ROLE}`, () => {
    const state = ['developer', 'user'];
    const action = {
      type: REMOVE_ROLE,
      payload: 'developer'
    };

    assert.deepEqual(roleReducer(state, action), ['user']);
  });
});
