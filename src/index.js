import { createStore as createReduxStore } from 'redux';
import createStore from './store';
import createReducer from './reducer';
import { createId } from './util';
import createLocalStorage from './localstorage.js';
import createRenderer from './renderer';
import createActions from './action';
import createStyles from './style';
import App from './container';

const storage = createLocalStorage(global.localStorage, 'storytime');

const rootReducer = createReducer(createId);
const store = createStore(createReduxStore, rootReducer, storage);
const actions = createActions();
const styles = createStyles();

storage.connect(store);
createRenderer(App, store, actions, styles);
