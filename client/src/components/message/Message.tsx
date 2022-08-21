import React from "react";
import "./Message.css";

import { MessageType } from "./Message.model";

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = (props: MessageProps): JSX.Element => {
  return (
    <div className="message-container">
      <div className="title-container">
        <p className="timestamp">{props.message.timeStamp.toDateString()}</p>
        <p className="sending-user">{props.message.sendingUser}</p>
      </div>
      <p className="text">{props.message.text}</p>
    </div>
  );
};
