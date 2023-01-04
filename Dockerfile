# syntax=docker/dockerfile:1
FROM node:18-alpine as base

WORKDIR ./

COPY ["package.json" ,"package.json"]

FROM base as test
RUN npm i
COPY . .
RUN npm run test

FROM base as prod
RUN npm i
COPY . .
CMD [ "node", "server.js" ]

EXPOSE 4000