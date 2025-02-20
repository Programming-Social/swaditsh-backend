const express = require('express');
const { server } = require('http');
const { version } = require('./package.json');
const sequelize = require('./database/models/index.js')

const app = express();
const PORT = process.env.PORT || 4000;
const server = new Server(app);

// Middlewares
/*

app.use(<middlewares>);

*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic Routes
app.get('/version', (req, res) => {
  res.send({
    'APP-VERSION': version,
  });
});

app.use('*', (req, res) => {
  res.send(`
    <div>
    The path does not exist
    </div>
    `);
});

// Routes
/*
app.use('/<path>',route-module)
 */

server.listen(PORT, async () => {
  console.log('SEVER started ! \non port %d !', PORT);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
