import { createStore } from 'redux';
import rootReducer from './reducer';
import { createRenderer, subscribeRenderer } from './renderer';
import createActions from './action';
import App from './component/app';

const initialState = {
  stories: ['foo']
};

const store = createStore(rootReducer, initialState);
const actions = createActions(store);
const renderer = createRenderer(App, actions);

actions.addStory('bar');

const { subscribe, getState } = store;
subscribeRenderer(renderer, subscribe, getState);
