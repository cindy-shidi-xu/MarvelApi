import chai, {expect} from 'chai';
import fakeredis from 'fakeredis';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';
import axios from 'axios';
import {saveSearchResults, handleSearch, makeApiCall, searchComics} from './searchComics';

chai.use(sinonChai);

describe('searchComics', () => {
  
  const sandbox = sinon.sandbox.create();
  const axiosGetStub = sandbox.stub();

  const {searchComics, makeApiCall, handleSearch} = proxyquire('./searchComics', {
    'axios': {get: axiosGetStub},
  });

  let redisDataStore; 
  const key = '123';
  const object = {
    test: 'test',
  };

  const params = {
    params: 'params',
  }

  const searchResultDetails = {details: 'details'}
  const searchResult = {
    data: {
      data: searchResultDetails,
    }
  }

  const failureResult = {
    errorCode: 'EC_SEARCH_FAILURE',
    errorDescription: 'Unable to complete the search',
  }

  afterEach(() => {
    sandbox.reset();
  });

  it('should save search result to the Redis store', (done) => {
    redisDataStore = {
      saveSearchResults: () => Promise.resolve()
    };
    saveSearchResults(redisDataStore, key, object).then((result) => {
      expect(result).to.eql(key);
      done();
    })

  });

  it('should return search result from the Redis store', (done) => {
    redisDataStore = {
      getSearchResults: () => Promise.resolve(searchResult)
    };
    handleSearch(redisDataStore, params, key).then((result) => {
      expect(result).to.eql(searchResult);
      done();
    })
  });

  it('should return search result from the api call', (done) => {
    redisDataStore = {
      getSearchResults: () => Promise.resolve(),
      saveSearchResults: () => Promise.resolve()
    };

    axiosGetStub.returns(Promise.resolve(searchResult));

    handleSearch(redisDataStore, params, key).then((result) => {
      expect(result).to.eql(searchResultDetails);
      done();
    })
  });

  it('should return failure from the api call', (done) => {
    redisDataStore = {
      getSearchResults: () => Promise.resolve(),
      saveSearchResults: () => Promise.resolve()
    };

    axiosGetStub.returns(Promise.reject(failureResult));

    handleSearch(redisDataStore, params, key).catch((result) => {
      expect(result).to.eql(failureResult);
      done();
    })
  });

  it('should return success from the api call', (done) => {
    axiosGetStub.returns(Promise.resolve(searchResult));
    makeApiCall(redisDataStore, params, key).then((result) => {
      console.log('debug--result', result);
      expect(result).to.eql(searchResultDetails);
      done();
    })
  });

  it('should return failure from the api call', (done) => {
    axiosGetStub.returns(Promise.reject('error'));
    makeApiCall(redisDataStore, params, key).catch((result) => {
      console.log('debug--result', result);
      expect(result).to.eql(failureResult);
      done();
    })
  });
});
