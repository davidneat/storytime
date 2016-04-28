import React from 'react';
import TestUtils from 'react-addons-test-utils';

import App from '../../../src/component/app';

describe('App', () => {
  it('returns valid dom', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    assert.equal(result.props.children, 'Title');
  });
});
