import express from 'express';
import mongoose from 'mongoose';
import setupRouter from './bootstrap/setupRouter';
import { IErrorRequestHandler } from './@types/IRequestHandler';

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

App.use(express.static('dist'));

const port: number = Number(process.env.PORT) || 8052; // set our port

setupRouter(App);

App.use((req, res) => {
  res.sendFile('/dist/index.html');
});

App.use(function (err, req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      url: err.message,
    })
  );
  return false;
} as IErrorRequestHandler);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// const routes: Router[] = [extraRouter, testRouter];
// App.use('/api', routes);

/*
Start our server
 */
App.listen(port);
console.log(`App listening on ${port}`);
