# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR ./

COPY ["package.json" ,"package.json"]
ARG DEV_DATABASE_URL
RUN env DEV_DATABASE_URL=$DEV_DATABASE_URL
RUN npm i
COPY . .
RUN npm run lint
RUN npm run test
CMD ["node","./server.js"]
EXPOSE 4000