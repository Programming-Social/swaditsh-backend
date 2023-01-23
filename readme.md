# N-S-P

N-S-P is a backend application built using the following technologies:
- Node.js
- Sequelize
- Postgres SQL
- Docker
- EsLint
- Prettier

## Setting up the Database

To set up the database, you need to first create a model for the "User" table using the following command:
```sh
npx sequelize model:create --name User --attributes name:string,email:string password:string

Next, you need to use the Sequelize CLI migration command to migrate the table schemas to the database.

```
npx sequelize db:migrate
```

Note: If you don't have the Sequelize CLI installed, please install it as a global package by running the following command:

```
npm install -g sequelize-cli
```

## Running the App
### Development Mode

To run the app in development mode, use the following command:

```
npm run dev
```
This uses the server.js file as the entry point.

### Production Mode

To run the app in production mode, use the following command:

```
npm start
```

This uses the index.js file as the entry point.

Please keep in mind that the above example is a general guide, the actual implementation may vary depending on the specific project.

