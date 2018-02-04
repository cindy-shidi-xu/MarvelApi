import logger from '../logger';
import config from '../config'

export const saveCallback = (resolve, reject) => error => {
  if (error) {
    logger.info('Error saving search results to redis', error);
    reject(error);
  } else {
    resolve();
  }
};

export const getCallback = (resolve, reject) => (error, response) => {
  if (error) {
    logger.error('Error retrieving search results from redis', error);
    reject(error);
  } else {
    resolve(JSON.parse(response || '[]'));
  }
};

export default class RedisDataStore {
  constructor(redisClient) {
    this.redisClient = redisClient;
    this.saveSearchResults = this.saveSearchResults.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  saveSearchResults(key, searchResult) {
    return new Promise((resolve, reject) => {
      this.redisClient.set(key, JSON.stringify(searchResult), config.redis.keyOperation, config.redis.ttl, saveCallback(resolve, reject));
    });
  }

  getSearchResults(key) {
    return new Promise((resolve, reject) => {
      this.redisClient.get(key, getCallback(resolve, reject));
    });
  }
}

