import { createStore } from 'redux';
import rootReducer from './reducer';
import { createRenderer, subscribeRenderer } from './renderer';
import createActions from './action';
import App from './component/app';

const initialState = {
  stories: ['foo']
};

const { subscribe, getState, dispatch } = createStore(rootReducer, initialState);
const actions = createActions(dispatch);
const renderer = createRenderer(App, actions);

actions.addStory('bar');

subscribeRenderer(renderer, subscribe, getState);
