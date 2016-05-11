import React from 'react';

const defaultStories = [
  { text: 'foo' },
  { text: 'bar' }
];

const StoryList = ({ stories }) =>
  <ul>
    {stories.map((story, index) =>
      <li key={index}>
        <span>{story.text}</span>
      </li>
    )}
  </ul>
;

StoryList.propTypes = { stories: React.PropTypes.array };
StoryList.defaultProps = { stories: defaultStories };

export default () =>
  <div>
    <input type="text" placeholder="Add story" />
    <StoryList />
  </div>
;
