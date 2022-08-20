import express from "express";
require("express-async-errors"); // to handle async errors in express middleware automatically
import { MessageRoute } from "./resources/message/message.router";
import { logger, notFoundHandler, errorHandler, isLoggedIn } from "./middlewares";
import joi from "joi";

export class HttpService {
  private app: express.Application;
  private messageRoute: MessageRoute = new MessageRoute();

  constructor() {
    this.app = express();
  }

  public setupMiddleware() {
    this.app.use(express.json()); //parsar body till json, jag behöver nu inte try/catch för inkommande data map parse
    this.app.use(express.urlencoded({ extended: true })); //for parsing application/x.ww.form.urlencoded
    this.app.use(logger);
    this.app.use(isLoggedIn);
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
