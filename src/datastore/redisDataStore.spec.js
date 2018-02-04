import chai, {expect} from 'chai';
import fakeredis from 'fakeredis';
import RedisDataStore, {getCallback, saveCallback} from './redisDataStore';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('redis data store', () => {
  let datastore;
  let redisClient;
  before(() => {
    redisClient = fakeredis.createClient('test redis store');
    datastore = new RedisDataStore(redisClient);
  });

  it('should save and return object', () => {
    return datastore.saveSearchResults('1234', {test: 'test'}).then(() => {
      return datastore.getSearchResults('1234').then(response => {
        expect(response).to.eql({test: 'test'});
      });
    });
  });

  it('should return empty array when search return nothing', () => {
    return datastore.getSearchResults('unknown').then(response => {
      expect(response).to.eql([]);
    });
  });

  describe('getCallback', () => {
    let resolve;
    let reject;

    beforeEach(() => {
      resolve = sinon.spy();
      reject = sinon.spy();
    });

    it('should call reject in case of error', () => {
      const error = {error: 'some error'};
      getCallback(resolve, reject)(error);
      expect(reject).to.have.been.calledWith(error);
      expect(resolve).to.not.have.been.called;
    });

    it('should json parse response in case of positive response', () => {
      const data = '[{}]';
      getCallback(resolve, reject)(null, data);
      expect(resolve).to.have.been.calledWith([{}]);
      expect(reject).to.not.have.been.called;
    });

    it('should return empty array when response is null', () => {
      getCallback(resolve, reject)(null, null);
      expect(resolve).to.have.been.calledWith([]);
      expect(reject).to.not.have.been.called;
    });
  });

  describe('saveCallback', () => {
    let resolve;
    let reject;

    beforeEach(() => {
      resolve = sinon.spy();
      reject = sinon.spy();
    });

    it('should call reject in case of error', () => {
      const error = {error: 'some error'};
      saveCallback(resolve, reject)(error);
      expect(reject).to.have.been.called;
      expect(resolve).to.not.have.been.called;
    });

    it('should call resolve on success', () => {
      saveCallback(resolve, reject)(null);
      expect(resolve).to.have.been.called;
      expect(reject).to.not.have.been.called;
    });
  });
});
