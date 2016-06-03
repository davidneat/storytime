import React from 'react';

const renderStory = (story, key) =>
  <li key={key}>{story}</li>
;

const renderStories = (stories = []) => stories.map(renderStory);

export default (props) => {
  const { story } = props.store;
  const stories = renderStories(story) || 'No Stories';
  return <ul>{stories}</ul>;
};
