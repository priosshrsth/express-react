import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import { extraRouter, testRouter } from './routes/routes';

/*
DB connect
 */
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true }).then();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected');
});

/*
create express instance
 */
const App = express();

/*
Configure app to use bodyparser to read ajax request from post
 */
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

const port: number = Number(process.env.PORT) || 8052; // set our port

App.use(express.static('dist'));
App.get('/', (req, res) => {
  console.log('sending index.html');
  res.sendFile('/dist/index.html');
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// const routes: Router[] = [extraRouter, testRouter];
// App.use('/api', routes);

/*
Start our server
 */
const server = App.listen(port);
console.log(`App listening on ${port}`);

// process.on('SIGINT', () => {
//   process.on('SIGTERM', () => {
//     console.log('SIGTERM signal received: closing HTTP server');
//     server.close(() => {
//       console.log('HTTP server closed');
//     });
//   });
// });
