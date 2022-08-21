import React from "react";
import { Message } from "../message/Message";
import { MessageType } from "../message/Message.model";

interface MessageProps {
  messages: MessageType[];
}

export const MessageList: React.FC<MessageProps> = (props: MessageProps): JSX.Element => {
  const test = props.messages.map((message: MessageType) => <Message key={message.timeStamp.toString()} message={message} />);
  return <>{test}</>;
};
