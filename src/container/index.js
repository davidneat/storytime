import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, StoryList } from '../component';

const App = ({ actions }) =>
  <div>
    <Input actions={actions} />
    <StoryList actions={actions} />
  </div>
;

App.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect()(App);
