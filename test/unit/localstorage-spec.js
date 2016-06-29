import createLocalstorage from '../../src/localstorage';

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

    storageInstance = createLocalstorage(localStorageMock, key);
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
    it('subscribes to the store with a callback which calls localStorageMock.setItem', () => {
      const value = 'store-updated';
      storeMock.subscribe.callsArgWith(0);
      storeMock.getState.returns(value);

      storageInstance.connect(storeMock);
      assert.deepEqual(localStorageMock.setItem.lastCall.args, [key, value]);
    });
  });
});
