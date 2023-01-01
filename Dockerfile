# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR ./
COPY . .
RUN node --max-old-space-size=4096 `which npm` install
CMD ["node", "./server.js"]
EXPOSE 4000