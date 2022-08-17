import fs from "fs";
import fsPromises from "fs/promises";

export class Repository {
  constructor() {}
  private readonly fileName = "src/Data/messages.json";

  public seedJsonFile() {
    const data = {
      messages: [
        {
          id: "1",
          user: "test user",
          text: "test text",
        },
        {
          id: "2",
          user: "test user2",
          text: "test text2",
        },
      ],
    };
    this.writeDataToFile(data);
  }

  public async getStringFromFile(): Promise<string> {
    try {
      const data = await fsPromises.readFile(this.fileName, "utf8");
      return JSON.parse(data).toString();
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  public async writeDataToFile(data: any): Promise<void> {
    try {
      await fsPromises.writeFile(this.fileName, JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  }
}
