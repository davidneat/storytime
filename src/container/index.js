import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from '../component/input';

const renderStories = (stories, actions) => stories.map((story, key) => {
  const handleRemove = () => actions.removeStory(story);

  return (<li key={key}>
    <span>{story}</span>
    <button onClick={handleRemove}>remove</button>
  </li>);
});

const App = ({ stories, actions }) => {
  const storyList = renderStories(stories, actions);
  return (<div>
    <Input actions={actions} />
    <ul>{storyList}</ul>
  </div>);
};

App.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  stories: state.stories
});

export default connect(mapStateToProps)(App);
