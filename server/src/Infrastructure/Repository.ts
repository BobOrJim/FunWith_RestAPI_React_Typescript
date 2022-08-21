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
};

const seedData: Message[] = [
  {
    id: uuidv4(),
    user: "1 Django",
    text: "The D is silent.",
  },
  {
    id: uuidv4(),
    user: "2 Kill Bill",
    text: "Do you find me sadistic?",
  },
  {
    id: uuidv4(),
    user: "3 Mr White",
    text: "Are you gonna bark all day, lil doggie, or are you gonna bite?",
  },
  {
    id: uuidv4(),
    user: "4 Jules",
    text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness. For he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.",
  },
  {
    id: uuidv4(),
    user: "5 Django",
    text: "The D is silent.",
  },
  {
    id: uuidv4(),
    user: "6 Kill Bill",
    text: "Do you find me sadistic?",
  },
  {
    id: uuidv4(),
    user: "7 Mr White",
    text: "Are you gonna bark all day, lil doggie, or are you gonna bite?",
  },
  {
    id: uuidv4(),
    user: "8 Jules",
    text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness. For he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.",
  },
  {
    id: uuidv4(),
    user: "9 Django",
    text: "The D is silent.",
  },
  {
    id: uuidv4(),
    user: "10 Kill Bill",
    text: "Do you find me sadistic?",
  },
  {
    id: uuidv4(),
    user: "11 Mr White",
    text: "Are you gonna bark all day, lil doggie, or are you gonna bite?",
  },
  {
    id: uuidv4(),
    user: "12 Jules",
    text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness. For he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you.",
  },
];
