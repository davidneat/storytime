import React, { PropTypes } from 'react';

export default function Input(props) {
  const { actions } = props;
  const addStory = () => {
    actions.addStory('bar');
  };
  return <form onSubmit={addStory}><input value="bar" /></form>;
}

Input.propTypes = {
  actions: PropTypes.object.isRequired
};
