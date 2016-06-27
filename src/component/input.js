import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let input;
let selectedRole;

const Input = ({ addStory }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addStory(input.value);
    input.value = '';
  };

  const onChange = (event) => {
    event.preventDefault();
    selectedRole = event.target.value;
  };

  return (<form onSubmit={onSubmit}>
    <select value={selectedRole} onChange={onChange}>
      <option value="user">As an User</option>
      <option value="developer">As a Developer</option>
    </select>
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
