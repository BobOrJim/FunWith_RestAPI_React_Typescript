import React from "react";
import "./Message.css";

import type { MessageType } from "./Message.model";

interface MessageProps {
  message: MessageType;
  handleDeleteMessage: (id: string) => void;
  handleExpandMessage: (id: string) => void;
  handleEditMessage: (id: string) => void;
}

export const Message: React.FC<MessageProps> = (props: MessageProps): JSX.Element => {
  //If im not using this function i get stuck in a render loop
  function handleDeleteMessageClick() {
    props.handleDeleteMessage(props.message.id);
  }

  function handleExpandMessageClick() {
    props.handleExpandMessage(props.message.id);
  }

  function handleEditMessageClick() {
    props.handleEditMessage(props.message.id);
  }

  return (
    <div className="message-container">
      <button onClick={handleDeleteMessageClick} className="delete-button">
        X
      </button>
      <button onClick={handleExpandMessageClick} className="expand-button">
        expand
      </button>
      <button onClick={handleEditMessageClick} className="edit-button">
        edit
      </button>
      <div className="title-container">
        <p className="sending-user">{props.message.user}</p>
      </div>
      <p className="text">{props.message.text}</p>
    </div>
  );
};
