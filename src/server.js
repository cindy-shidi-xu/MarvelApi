import express from 'express';
import http from 'http';
import config from './config';
import health from './api/health';
import RedisDataStore from './datastore/redisDataStore';
import initializeRedisClient from './redis/redisClient';
import {getComics} from './api/searchComics';

export default function(redisClient) {
  const redisDataStore = new RedisDataStore(redisClient || initializeRedisClient());

  const routes = {
    '/health': health(),
    '/getComics': getComics({redisDataStore}),
  };

  return createServer(routes);
}

export function createServer(routes, opts = {port: config.serverPort}) {

  const app = express();
  Object.keys(routes).forEach(routeName => {
    app.use(routeName, routes[routeName]);
  });

  const server = http.createServer(app);
  server.listen(config.serverPort);

  return server;
}
