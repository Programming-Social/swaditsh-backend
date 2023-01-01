import dotenv from 'dotenv'
import express from 'express'
import { Server } from 'http'
import db from "./database/models/index.cjs"
import packageFile from './package.json' assert {type: 'json'}
import UserRoutes from './routes/user-routes.js'
const { version } = packageFile
const { sequelize } = db

dotenv.config()

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
app.get("/version", (req, res) => {
  res.send({
    "APP-VERSION": version,
  });
});


// Routes
app.use('/user', UserRoutes)


app.use("*", (req, res) => {
  res.send(`
    <div>
    The path does not exist
    </div>
    `);
});

server.listen(PORT, async () => {
  console.log("SEVER started ! \non port %d !", PORT);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

export default server
