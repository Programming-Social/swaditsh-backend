# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR ./

COPY ["package.json" ,"package.json"]

RUN npm i
COPY . .
RUN npm run test
CMD ["npm","run","dev"]
EXPOSE 4000