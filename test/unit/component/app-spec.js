import App from '../../../src/component/app';

function shallowRender(Component) {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer.getRenderOutput();
}

describe('App', () => {
  it('returns a div', () => {
    const store = { stories: ['foo'] };
    assert.deepEqual(shallowRender(<App store={store} />).type, 'div');
  });
});
