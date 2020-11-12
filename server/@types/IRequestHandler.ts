import type { RequestHandler, ErrorRequestHandler } from 'express-serve-static-core';

export interface IReqs {
  date: string;
  method: string;
  url: string;
  body: Object;
}

export type IRequestHandler = RequestHandler;

export type IErrorRequestHandler = ErrorRequestHandler;
