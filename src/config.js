export default {
  serverPort: 3500,
  marvelApiUrl: 'http://gateway.marvel.com/v1/public/comics',
  apiKey: '2caf617c7452e32a30e05cca6e4f8e5f',
  privateKey: '2b4cbc88f32eea5c66b5a852fa0009d09c7ef368',
  redis: {
    keyOperation: 'EX',
    ttl: 60 * 60 * 2
  }
}