import React from 'react';
import ReactDOM from 'react-dom';

export default (RootComponent) => (store) => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <RootComponent store={store} />,
    domNode
  );
};
