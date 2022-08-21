import React from "react";
import { Message } from "../message/Message";
import { MessageType } from "../message/Message.model";

interface MessageProps {
  messages: MessageType[];
  handleDeleteMessage: (id: string) => void;
  handleExpandMessage: (id: string) => void;
  handleEditMessage: (id: string) => void;
}

export const MessageList: React.FC<MessageProps> = (props: MessageProps): JSX.Element => {
  const test = props.messages.map((message: MessageType) => (
    <Message key={message.id} message={message} handleDeleteMessage={props.handleDeleteMessage} handleExpandMessage={props.handleExpandMessage} handleEditMessage={props.handleEditMessage} />
  ));
  //console.log(test);
  return <>{test}</>;
};
