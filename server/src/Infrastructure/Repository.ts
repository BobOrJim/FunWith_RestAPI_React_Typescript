import fs from "fs";
import fsPromises from "fs/promises";

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
