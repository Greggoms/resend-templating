import { NextFunction, Request, Response } from "express";

import ErrorResponse from "../interfaces/ErrorResponse";

// Requested endpoint does not exist
export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Endpoint Not Found: '${req.originalUrl}'`);
  next(error);
}

// An error occured during the transaction
export function errorHandler(
  error: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  // Catch and handle unknown errors
  return res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
}
