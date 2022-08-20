import type express from "express"; //Jag vill endast avnända typerna, så jag importerar endast dem

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

export const consoleUnknownObject = (object: any) => {
  var propNames = Object.getOwnPropertyNames(object);
  propNames.forEach(function (propName) {
    console.log("propname= " + propName + " provvalue= " + object[propName]);
  });
};
