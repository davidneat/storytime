import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, StoryList } from '../component';

const App = ({ actions, styles }) =>
  <div className={styles.app}>
    <Input actions={actions} />
    <StoryList actions={actions} styles={styles} />
  </div>
;

App.propTypes = {
  actions: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect()(App);
