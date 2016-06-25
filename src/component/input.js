import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let input;

const Input = ({ addStory }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addStory(input.value);
    input.value = '';
  };

  return (<form onSubmit={onSubmit}>
    <input ref={node => (input = node)} />
  </form>);
};

Input.propTypes = {
  addStory: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { actions }) => {
  const { addStory } = actions;
  return {
    addStory: (story) => {
      dispatch(addStory(story));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
