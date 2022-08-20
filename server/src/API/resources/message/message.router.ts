import express from "express";
import { getAllMessages, getMessageById, postMessage, putMessage, deleteMessage } from "./message.controller";
import { messageSchema } from "./message.model";

//A Route can have one or moer controllers
export class MessageRoute {
  public router = express.Router();

  constructor() {
    this.router.get("/", getAllMessages);
    this.router.get("/:id", getMessageById);
    this.router.post("/", validateMessage, postMessage);
    this.router.put("/:id", validateMessage, putMessage);
    this.router.delete("/:id", deleteMessage);
  }
}

const validateMessage = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const result = messageSchema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};
