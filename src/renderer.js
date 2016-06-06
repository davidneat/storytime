import React from 'react';
import ReactDOM from 'react-dom';

export const createRenderer = (RootComponent, actions) => (store) => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <RootComponent store={store} actions={actions} />,
    domNode
  );
};

export const subscribeRenderer = (renderer, subscribe, getState) => {
  const render = () => renderer(getState());
  subscribe(render);
  render();
};
