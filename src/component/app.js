import React, { PropTypes } from 'react';
import Input from './input';

const renderStory = (story, key) =>
  <li key={key}>{story}</li>
;

const renderStories = (stories = []) => stories.map(renderStory);

export default function App(props) {
  const { stories } = props.store;
  const storyList = renderStories(stories) || 'No Stories';
  return (<div>
    <Input actions={props.actions} />
    <ul>{storyList}</ul>
  </div>);
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
