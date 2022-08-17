import { Message } from "../../Common/Message";
import { Repository } from "../../Infrastructure/Repository";

import type express from "express"; //Jag vill endast avnända typerna, så jag importerar endast dem

export class MessageController {
  //private message: Message;
  private repository: Repository;

  constructor() {
    this.repository = new Repository();
    //this.message = new Message();
  }

  public async getAllMessages(req: express.Request, res: express.Response) {
    let message = new Message();
    message.id = "test id";
    message.user = "test user";
    message.text = "test text";

    console.log("getAllMessages träffades");
    //console.log(message.id);
    //res.status(200).json(message);

    res.status(200).json(await this.repository.getStringFromFile());
  }

  /*
  public getRoomDetails(req: express.Request, res: express.Response) {
    res.status(200).send("getRoomDetails. NOT IMPLEMENTED: Book detail: " + req.params.id);
  }

  public postRoom(req: express.Request, res: express.Response) {
    console.log("postRoom");
    console.log(req.body.name);
    res.status(200).json(req.body);

  } */
}
