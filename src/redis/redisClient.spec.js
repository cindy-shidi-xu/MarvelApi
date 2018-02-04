import {expect} from 'chai';
import initializeRedisClient from './redisClient';
import config from '../config';

describe('redis client', () => {
  it('should initialize redis client', () => {
    expect(initializeRedisClient().options.host).to.equal(config.redisEndPoint);
  });
});
