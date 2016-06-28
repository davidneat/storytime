import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export default (RootComponent, store, actions, styles) => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <Provider store={store}>
      <RootComponent actions={actions} styles={styles} />
    </Provider>,
    domNode
  );
};
