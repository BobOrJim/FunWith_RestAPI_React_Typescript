import express from "express";
require("express-async-errors"); // to handle async errors in express middleware automatically
import { MessageRoute } from "./routes/MessageRoute";
import { logger } from "./utils";
import joi from "joi";
import { Message } from "../Common/Message";

export class HttpService {
  private app: express.Application;
  private messageRoute: MessageRoute = new MessageRoute();

  constructor() {
    this.app = express();
  }

  public validateMessage(message: Message) {
    const schema = joi.object({
      user: joi.string().required(),
      text: joi.string().required(),
    });
  }

  //The middleware
  //get post put delete. tittar på verb och sökväg
  //use körs oberoende av verb och "alla" sökvägar
  //all oberoende av verb och exast exakt sökväg

  public setupMiddleware() {
    this.app.use(express.json()); //parsar body till json, jag behöver nu inte try/catch för inkommande data map parse
    this.app.use(express.urlencoded({ extended: true })); //for parsing application/x.ww.form.urlencoded
    this.app.use(logger);

    this.app.use(this.validateMessage);

    this.app.use("/api/v1/message", this.messageRoute.router);
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }

  public startListening() {
    this.app.listen(6000, () => {
      console.log("Server is running on: http://localhost:6000");
    });
  }
}

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err);
  res.status(500).send("Something went wrong");
};

const notFoundHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send("Not found");
};
