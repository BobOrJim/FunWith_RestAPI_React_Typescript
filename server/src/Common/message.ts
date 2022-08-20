import Joi from "joi";
/*
export class Message {
  public id: string;
  public user: string;
  public text: string;

  constructor(id: string, user: string, text: string) {
    this.id = id;
    this.user = user;
    this.text = text;
  }
}*/

export type Message = {
  id: string;
  user: string;
  text: string;
};

export type Message2 = {
  //hmm, fundera krind id
  user: string;
  text: string;
};

export const messageSchema = Joi.object<Message2, true>({
  user: Joi.string().required(),
  text: Joi.string().required(),
}).unknown(true);
