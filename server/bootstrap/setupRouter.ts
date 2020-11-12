import type { Express } from 'express';
import bodyParser from 'body-parser';
import { IRequestHandler } from '../@types/IRequestHandler';

const glob = require('glob');
const path = require('path');

export default function setup(App: Express) {
  /*
Configure app to use bodyparser to read ajax request from post
 */
  App.use(bodyParser.json());
  App.use(bodyParser.urlencoded({ extended: true }));

  const allMiddlewares: Function[] = [];
  glob.sync(`${__dirname}/middlewares/*`).forEach((file: string) => {
    // eslint-disable-next-line import/no-dynamic-require,global-require
    const module = require(path.resolve(file));
    const fn = Object.values(module)[0] as IRequestHandler;
    App.use(fn);
    allMiddlewares.push(fn);
  });
  App.get('/middlewares', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        name: 'prios',
        allMiddlewares,
      })
    );
  });
}
