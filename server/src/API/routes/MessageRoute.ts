import express from "express";
import { getAllMessages, getMessageById, postMessage, putMessage, deleteMessage } from "../controllers/MessageController";

//A Route can have one or moer controllers
export class MessageRoute {
  public router = express.Router();

  constructor() {
    this.router.get("/", getAllMessages);
    this.router.get("/:id", getMessageById);
    this.router.post("/", postMessage);
    this.router.put("/:id", putMessage);
    this.router.delete("/:id", deleteMessage);
  }
}
