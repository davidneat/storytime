import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export const createRenderer = (RootComponent, store, actions) => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <Provider store={store}>
      <RootComponent actions={actions} />
    </Provider>,
    domNode
  );
};
