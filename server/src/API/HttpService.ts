import express from "express";
import { MessageRoute } from "./routes/MessageRoute";

export class HttpService {
  private app: express.Application;
  private messageRoute: MessageRoute = new MessageRoute();

  constructor() {
    this.app = express();
  }

  //This is the middleware
  public setupMiddleware() {
    this.app.use(express.json()); //parsar body till json, jag behöver nu inte try/catch för inkommande data map parse

    //this.app.use(express.urlencoded({ extended: true })); //for parsing application/x.ww.form.urlencoded
    //här skall min logger in
    //här skall min validering in

    this.app.use("/api/v1/message", this.messageRoute.router);
  }

  public startListening() {
    this.app.listen(6000, () => {
      console.log("Server is running on: http://localhost:6000");
    });
  }
}

/*
interface User {
  name: string;
  age: number;
}*/

/*
get, post, put, delete
körs beroende på http verbet & endast exakta sökvägen
all
körs oberoende av http verbet & endast exakta sökvägen
use
körs oberoende av http verbet & sökvägen inklusive underliggande sökvägar

*/
