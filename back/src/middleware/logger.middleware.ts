import { NextFunction, Request, Response } from "express";

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {

  const date = new Date().toLocaleTimeString()

  console.log(`Metodo: ${req.method} | Ruta: ${req.url} at [${date}]`);
  next();
}
