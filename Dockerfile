# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR ./

COPY ["package.json" ,"package.json"]

RUN npm i
COPY . .
RUN npm run lint
CMD ["node","./server.js"]
EXPOSE 4000