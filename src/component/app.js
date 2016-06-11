import React, { PropTypes } from 'react';
import Input from './input';

const renderStory = (story, key) =>
  <li key={key}>{story}</li>
;

const renderStories = ({ stories }) => stories.map(renderStory);

const App = (props) => {
  const { store, actions } = props;
  const storyList = renderStories(store) || 'No Stories';
  return (<div>
    <Input actions={actions} />
    <ul>{storyList}</ul>
  </div>);
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default App;
