import type express from "express"; //Jag vill endast avnända typerna, så jag importerar endast dem
import { consoleUnknownObject } from "./utils";

export const isLoggedIn = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const isLoggedIn = true; // Simulating a session..
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json("You must login");
  }
};

export const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  consoleUnknownObject(req.body as any);
  consoleUnknownObject(req.header as any);
  console.log(`${req.method} ${req.path} ${req.body}`);
  console.log("om my way in");
  next();
  console.log("om my way out");
  consoleUnknownObject(req.body as any);
  consoleUnknownObject(req.header as any);
  console.log(`${req.method} ${req.path} ${req.body}`);
};

export const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err);
  res.status(500).send("Something went wrong");
};

export const notFoundHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send("Not found");
};
