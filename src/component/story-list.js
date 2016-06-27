import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const renderStoryItems = (stories, styles, handleRemove) => stories.map((story, key) => {
  const onClick = () => handleRemove(story);
  return (<li key={key} className={styles.listItem}>
    <span className={styles.text}>{story.text}</span>
    <button onClick={onClick} className={styles.remove}>remove</button>
  </li>);
});

const StoryList = ({ stories, styles, handleRemove }) => {
  const listItems = renderStoryItems(stories, styles, handleRemove);
  return <ul className={styles.list}>{listItems}</ul>;
};

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
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
