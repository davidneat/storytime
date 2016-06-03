import React, { PropTypes } from 'react';

const renderStory = (story, key) =>
  <li key={key}>{story}</li>
;

const renderStories = (stories = []) => stories.map(renderStory);

export default function App(props) {
  const { stories } = props.store;
  const storyList = renderStories(stories) || 'No Stories';
  return <ul>{storyList}</ul>;
}

App.propTypes = {
  store: PropTypes.object.isRequired
};
