import React from 'react';
import ReactDOM from 'react-dom';

export default (RootComponent, actions) => (store) => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <RootComponent store={store} actions={actions} />,
    domNode
  );
};
