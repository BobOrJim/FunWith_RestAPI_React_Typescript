import fs from "fs";
import fsPromises from "fs/promises";
import { Message } from "../api/resources/message/message.model";
import { v4 as uuidv4 } from "uuid";

const fileName = "src/Data/messages.json";

export const readStringFromFile = async (): Promise<string> => {
  try {
    return await fsPromises.readFile(fileName, "utf8");
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const writeStringToFile = async (dataAsString: string): Promise<void> => {
  try {
    await fsPromises.writeFile(fileName, dataAsString);
  } catch (err) {
    console.log(err);
  }
};

export const seedRepository = async () => {
  writeStringToFile(JSON.stringify(seedData));
  /*for (const message of seedData) {

  }*/
  //const dataAsString = await writeStringToFile(JSON.stringify(seedData));
};

/*
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
*/

const seedData: Message[] = [
  {
    id: uuidv4(),
    user: "Django",
    text: "The D is silent.",
  },
  {
    id: uuidv4(),
    user: "Kill Bill",
    text: "Do you find me sadistic?",
  },
  {
    id: uuidv4(),
    user: "Mr White",
    text: "Are you gonna bark all day, lil doggie, or are you gonna bite?",
  },
  {
    id: uuidv4(),
    user: "Mr White",
    text: "Are you gonna bark all day, lil doggie, or are you gonna bite?",
  },
];
