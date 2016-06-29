import createLocalStorage from '../../src/localstorage';

describe('Local Storage', () => {
  let key;
  let localStorageMock;
  let storeMock;
  let storageInstance;

  beforeEach(() => {
    key = 'some-key';

    localStorageMock = {
      setItem: sinon.stub(),
      getItem: sinon.stub()
    };

    storeMock = {
      subscribe: sinon.stub(),
      getState: sinon.stub()
    };

    storageInstance = createLocalStorage(localStorageMock, key);
  });

  describe('getData', () => {
    it('calls localStorageMock.getItem with the key', () => {
      storageInstance.getData();
      assert.equal(localStorageMock.getItem.lastCall.args[0], key);
    });

    it('returns the data from the store', () => {
      const data = 'all-the-data';
      localStorageMock.getItem.returns(data);
      assert.equal(storageInstance.getData(), data);
    });
  });

  describe('connect', () => {
    it('sets up the store subscription with a callback', () => {
      storageInstance.connect(storeMock);
      assert.ok(storeMock.subscribe.calledOnce);
      assert.ok(storeMock.subscribe.calledWith(sinon.match.func));
    });
  });

  describe('store subscription callback', () => {
    it('calls localStorageMock.setItem with the passed value as json string', () => {
      const value = { foo: 'bar' };
      const jsonString = JSON.stringify(value);
      storeMock.subscribe.callsArgWith(0);
      storeMock.getState.returns(value);

      storageInstance.connect(storeMock);
      assert.deepEqual(localStorageMock.setItem.lastCall.args, [key, jsonString]);
    });
  });
});
