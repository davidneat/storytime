import { createStore } from 'redux';
import createReducer from './reducer';
import createId from './util/unique-id';
import { createRenderer } from './renderer';
import createActions from './action';
import createStyles from './style';
import App from './container';

const initialState = {
  stories: [{ id: createId(), role: 'user', text: 'foo' }]
};

const rootReducer = createReducer(createId);
const store = createStore(rootReducer, initialState);
const actions = createActions();
const styles = createStyles();
createRenderer(App, store, actions, styles);
