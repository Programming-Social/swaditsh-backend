require("dotenv").config();
let DEV_DATABASE_URL = process.env.DEV_DATABASE_URL | 'postgres://postgres:postgres@localhost:5432/swadisth'
console.log({ hi: DEV_DATABASE_URL })
module.exports = {
  development: {
    url: 'postgres://postgres:postgres@localhost:5432/swadisth',
    dialect: "postgres",
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
