import { createStore } from 'redux';
import rootReducer from './reducer';
import createRenderer from './renderer';
import App from './component/app';

const renderer = createRenderer(App)();

const initialState = {
  stories: ['foo']
};

const store = createStore(rootReducer, initialState);

store.dispatch({
  type: 'ADD_STORY',
  text: 'bar'
});

function render() {
  renderer(store.getState());
}

store.subscribe(render);
render();
