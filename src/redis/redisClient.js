import redis from 'redis';
import config from '../config';
import logger from '../logger';

export default function initializeRedisClient() {
  const host = config.redisEndPoint;
  const redisClient = redis.createClient({host});

  redisClient.on('error', function(err) {
    logger.error('Unable to connect Redis database:', err);
    throw err;
  });

  redisClient.on('connect', function() {
    logger.info('Connected Successfully to Redis database');
  });
  return redisClient;
}
