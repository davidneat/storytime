import React, { PropTypes } from 'react';

const renderStory = (story, key) =>
  <li key={key}>{story}</li>
;

const renderStories = (stories = []) => stories.map(renderStory);

export default function App(props) {
  const { story } = props.store;
  const stories = renderStories(story) || 'No Stories';

  return <ul>{stories}</ul>;
}

App.propTypes = {
  store: PropTypes.object.isRequired
};
