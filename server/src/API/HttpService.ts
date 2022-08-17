import express from "express";
import { RoomRoute } from "./routes/roomRoute";

export class HttpService {
  private app: express.Application;
  private roomRoute: RoomRoute = new RoomRoute();

  constructor() {
    console.log("HttpService");
    this.app = express();
  }

  public setupMiddleware() {
    console.log("start middleware config");

    this.app.use(express.json()); //parsar body till json, jag behöver nu inte try/catch för inkommande data map parse
    //
    //this.app.use(express.urlencoded({ extended: true })); //for parsing application/x.ww.form.urlencoded
    this.app.use("/room", this.roomRoute.router);

    console.log("middleware config done ");
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
