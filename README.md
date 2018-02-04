Marvel Comic Book Title Search API
---

This service allows the user to interact with the Marvel API to search for comic books by title. The search result is cached in the Redis DB for fast retrieval in the future. The data in the Redis cache expires in 2 hours.

## Included

- Express with body-parser
- ES6
- Redis DB

# Test Files

Test files should sit with their source and be in teh format `*.spec.js`.

# Local Environment

Start redis using Docker

`docker-compose up`

`NODE_ENV=local npm run dev`

Then use Postman to hit localhost. If you need to clear the key cache in redis then use `docker-compose rm`.

# Production

Make sure you have a `dist` folder.

`npm run serve`

# Health and Info Endpoints

`localhost:3500/health`

`localhost:3500/getComics`
