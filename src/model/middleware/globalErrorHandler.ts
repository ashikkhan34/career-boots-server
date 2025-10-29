import type { ErrorRequestHandler } from "express";


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Default values
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Invalid input data";
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
