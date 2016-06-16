import React, { PropTypes } from 'react';
import Input from './input';

const renderStories = (stories, actions) => stories.map((story, key) => {
  const handleRemove = () => actions.removeStory(story);

  return (<li key={key}>
    <span>{story}</span>
    <button onClick={handleRemove}>remove</button>
  </li>);
});

const App = ({ store, actions }) => {
  const storyList = renderStories(store.stories, actions);
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
