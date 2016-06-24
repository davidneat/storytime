import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const renderStoryItems = (stories, handleRemove) => stories.map((story, key) => {
  const onClick = () => handleRemove(story);
  return (<li key={key}>
    <span>{story}</span>
    <button onClick={onClick}>remove</button>
  </li>);
});

const StoryList = ({ stories, handleRemove }) => {
  const listItems = renderStoryItems(stories, handleRemove);
  return <ul>{listItems}</ul>;
};

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  stories: state.stories
});

const mapDispatchToProps = (dispatch, { actions }) => {
  const { removeStory } = actions;
  return {
    handleRemove: (story) => {
      dispatch(removeStory(story));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
