FROM node:7.8.0

ENV NODE_ENV local

RUN mkdir /src
WORKDIR /src

ADD .npmrc /src/.npmrc
ADD package.json /src/package.json

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]

