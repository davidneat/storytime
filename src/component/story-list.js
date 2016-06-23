import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const renderStoryItems = (stories, actions) => stories.map((story, key) => {
  const handleRemove = () => {
    actions.removeStory(story);
  };

  return (<li key={key}>
    <span>{story}</span>
    <button onClick={handleRemove}>remove</button>
  </li>);
});

const StoryList = ({ stories, actions }) => {
  const listItems = renderStoryItems(stories, actions);
  return <ul>{listItems}</ul>;
};

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  stories: state.stories
});

export default connect(mapStateToProps)(StoryList);
