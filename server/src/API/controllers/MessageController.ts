import { Message } from "../../Common/Message";
import { readStringFromFile, writeStringToFile } from "../../Infrastructure/Repository";
import { v4 as uuidv4 } from "uuid";

import type express from "express"; //Jag vill endast avnända typerna, så jag importerar endast dem

//get
export const getAllMessages = async (req: express.Request, res: express.Response) => {
  let data: string = await readStringFromFile();
  if (data) {
    let messages: Message[] = JSON.parse(data);
    res.status(200).json(messages);
  } else {
    res.status(404).send("No messages found");
  }
};

//get
export const getMessageById = async (req: express.Request, res: express.Response) => {
  let data: string = await readStringFromFile();
  if (data) {
    let messages: Message[] = JSON.parse(data);
    let message = messages.find((m) => m.id == req.params.id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ message: "Message not found" });
    }
  } else {
    res.status(404).send("No messages found");
  }
};

//post
export const postMessage = async (req: express.Request, res: express.Response) => {
  let data: string = await readStringFromFile();
  //check valid body

  if (data) {
    let messages: Message[] = JSON.parse(data);
    let newMessage = buildMessage(uuidv4(), req.body.user, req.body.text);
    messages.push(newMessage);
    writeStringToFile(JSON.stringify(messages));
    res.status(200).json(newMessage);
  } else {
    let messages: Message[] = [];
    let newMessage = buildMessage(uuidv4(), req.body.user, req.body.text);
    messages.push(newMessage);
    writeStringToFile(JSON.stringify(messages));
    res.status(200).json(newMessage);
  }
};

//put
export const putMessage = async (req: express.Request, res: express.Response) => {
  let data: string = await readStringFromFile();
  if (data) {
    let messages: Message[] = JSON.parse(data);
    let message = messages.find((m) => m.id == req.params.id);
    if (message) {
      //replace this message with the new message but keep the id
      const oldId = message.id;
      const index = messages.indexOf(message);
      messages.splice(index, 1);
      let newMessage = buildMessage(oldId, req.body.user, req.body.text);
      messages.push(newMessage);
      writeStringToFile(JSON.stringify(messages));
      res.status(200).json(newMessage);
    } else {
      res.status(404).json({ message: "Message not found" });
    }
  } else {
    res.status(404).send("No messages found");
  }
};

//delete
export const deleteMessage = async (req: express.Request, res: express.Response) => {
  let data: string = await readStringFromFile();
  if (data) {
    let messages: Message[] = JSON.parse(data);
    let message = messages.find((m) => m.id == req.params.id);
    if (message) {
      const index = messages.indexOf(message);
      messages.splice(index, 1);
      writeStringToFile(JSON.stringify(messages));
      res.status(200).json(message);
    } else {
      res.status(404).json("Message not found");
    }
  } else {
    res.status(404).send("No messages found");
  }
};

const buildMessage = (id: string, user: string, text: string): Message => {
  let newMessage: Message = {
    id: id,
    user: user,
    text: text,
  };
  return newMessage;
};
