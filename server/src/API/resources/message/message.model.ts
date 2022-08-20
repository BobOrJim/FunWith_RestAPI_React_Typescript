import Joi from "joi";

export type Message = {
  id: string;
  user: string;
  text: string;
};

export const messageSchema = Joi.object<Message, false>({
  user: Joi.string().required().min(3),
  text: Joi.string().required().min(3),
});
