import App from '../../../src/component/app';

function shallowRender(Component) {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer.getRenderOutput();
}

describe('App', () => {
  it('returns valid dom', () => {
    assert.deepEqual(shallowRender(<App />),
      <div>
        <h1>Header</h1>
        <p>Paragraph</p>
      </div>
    );
  });
});
