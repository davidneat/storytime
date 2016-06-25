import { createStore } from 'redux';
import rootReducer from './reducer';
import { createRenderer } from './renderer';
import createActions from './action';
import App from './container';

const initialState = {
  stories: ['foo', 'bar']
};

const store = createStore(rootReducer, initialState);
const actions = createActions();
createRenderer(App, store, actions);
