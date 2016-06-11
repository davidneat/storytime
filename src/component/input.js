import React, { PropTypes } from 'react';

export default function Input({ actions }) {
  let input;
  const addStory = (event) => {
    event.preventDefault();
    actions.addStory(input.value);
    input.value = '';
  };
  return (<form onSubmit={addStory}>
    <input ref={node => (input = node)} />
  </form>);
}

Input.propTypes = {
  actions: PropTypes.object.isRequired
};
