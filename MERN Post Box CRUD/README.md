# Post Box MERN CRUD

- A Post Box displaying an input form and the Post Box where each card contains 2 values: title, and message.

- Inspired by:
	- [CodAffection Source Code](<https://github.com/CodAffection/MERN-Stack-CRUD>)
	- [CodAffection YT walkthrough](<https://youtube.com/watch?v=HuXBuXf52vA>)

- Rewritten from `create-react-app` to `next.js` and migrated the Material UI from v4 to v5.
	- Work in progress.

Uncaught Error: Cannot find module '@emotion/react'

## Set-up

### npm packages

`mern-stack-api`

- Express.js (for router)
- Mongoose (For MongoDB)
- body-parser (For JSON)
- cors ()
- nodemon (Installed globally, did not work for me when installed locally)

`mern-stack-client`

- creat-next-app

- redux (for redirects (independent app for state-management inclined applications))
- react-redux (for displaying the redux store into the component/UI)
- redux-thunk (for actions)
- axios (for making http requests at `mern-stack-client/src/actions/api.js`)
- @mui/material(for react UI)
- @mui/icons (for react UI)
- ~~butter-toast (Notification UI)~~ (not installable, skipped.)

### Applications used for Developing

- MongoDB compass (For Mongo Index GUI)
- postman (For RESTful API application)

## Initialization

- To start servers:

- Start MongoDB database connection in MongoDB compass.

- for mongoDB
  - run `nodemon index.js` at `./MERN CRUD/mern-stack-api` to connect to the database.

- for react
  - run `npm start` at `./MERN CRUD/mern-stack-client`to run react server again.

## Modifications different from the Tutorial

- Added a database icon as the favicon.
