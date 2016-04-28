import React from 'react';
import ReactDOM from 'react-dom';

export default (RootComponent) => () => {
  const domNode = document.getElementById('app');
  return ReactDOM.render(
    <RootComponent />,
    domNode
  );
};
