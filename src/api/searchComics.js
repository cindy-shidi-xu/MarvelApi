import {Router} from 'express';
import {isEmpty} from 'lodash';
import md5 from 'md5';
import axios from 'axios';
import config from '../config'
import logger from '../logger';

import {SEARCH_FAILURE, SEARCH_FAILURE_DESC, reportError} from '../api/error';


export function getComics({redisDataStore}) {
  const router = new Router();
  router.get('/', (req, res) => {
    const {title, offset} = req.query;
    const {apiKey, privateKey} = config;

    const timestamp = Date.now();
    var params = {
      ts: timestamp,
      hash: md5(`${timestamp}${privateKey}${apiKey}`),
      apikey: apiKey,
      offset: offset,
      orderBy: 'title', //TODO: pass in parameter
    }

    if (title) {
      params = {
        ...params,
        title,
      }
    }

    logger.info('params', params);

    const key = md5(`${title}${offset}`);
    handleSearch(redisDataStore, params, key).then((result) => {
      logger.info('Search result returned');
      res.status(200);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    })
  });
  return router;
}

export function saveSearchResults(redisDataStore, key, object) {
  logger.info('Save search result');
  return redisDataStore.saveSearchResults(key, object).then(() => {
    return Promise.resolve(key);
  });
}

export function handleSearch(redisDataStore, params, key) {
  return redisDataStore.getSearchResults(key).then((result) => {
    if (!isEmpty(result)) {
      logger.info('Redis lookup found result');
      return Promise.resolve(result);
    }
    logger.info('Redis lookup result not found');
    return makeApiCall(redisDataStore, params, key);
  })
  .catch(err => {
    return Promise.reject(err);
  })
}

export function makeApiCall(redisDataStore, params, key) {
  return axios.get(config.marvelApiUrl, {params})
  .then(res => {
    console.log('success path')

    const comics = res.data.data;
    saveSearchResults(redisDataStore, key, comics);
    return Promise.resolve(comics);
  }).catch(err => {
    console.log('error path', err);
    return Promise.reject(reportError(SEARCH_FAILURE, SEARCH_FAILURE_DESC));
  }); 
}


