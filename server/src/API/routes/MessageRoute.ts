import express from "express";
import { MessageController } from "../controllers/MessageController";

//A Route can have one or moer controllers
export class MessageRoute {
  private messageController: MessageController;
  public router = express.Router();

  constructor() {
    this.messageController = new MessageController();
    this.router.get("/", this.messageController.getAllMessages);
    //this.router.get("/:id", this.messageController.getRoomDetails);
    //this.router.post("/", this.messageController.postRoom);
  }
}
