import { useState, useRef, useEffect } from "react";
import { MessageType, MessageDto } from "./components/message/Message.model";
import { MessageList } from "./components/messageList/MessageList";

import "./globalCss/globalConstants.css";
import "./globalCss/globalCss.css";
import "./globalCss/desktop-aside-primary.css";
import "./globalCss/desktop-aside-secondary.css";
import "./globalCss/desktop-header-primary.css";
import "./globalCss/desktop-header-secondary.css";
import "./globalCss/desktop-main-bottom.css";
import "./globalCss/desktop-main-top.css";

import { getMessagesFromServer, postMessageToServer, deleteMessageFromServer } from "./components/message/Message.api";

let selectedMessagePosition: number = 0;

export const App: React.FC = (): JSX.Element => {
  console.log("App is running");

  const [messages, setMessages] = useState<MessageType[]>([]); //Undra om varje run skall få en egen useState, generea dynamiska??
  const [messageRepositoryChanged, setMessageRepositoryChanged] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<boolean>(false);
  const [expandMessage, setExpandMessage] = useState<boolean>(false);
  const refMessageText = useRef<HTMLInputElement>(null);
  const refUsername = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      const response = await getMessagesFromServer();
      if (response) {
        setMessages(response);
        console.log(response);
      }
    })();
  }, [messageRepositoryChanged]);

  function handleAddMessage(): void {
    const messageText = refMessageText.current?.value;
    const username = refUsername.current?.value;
    if (messageText && username) {
      const newMessage: MessageDto = {
        text: messageText,
        user: username,
      };
      (async () => {
        const response = await postMessageToServer(newMessage);
        if (response) {
          console.log(response);
          console.log();
          setMessageRepositoryChanged(!messageRepositoryChanged);
        }
      })();
      refMessageText.current.value = "";
      refUsername.current.value = "";
    }
  }

  function handleDeleteMessage(id: string): void {
    if (id) {
      (async () => {
        const response = await deleteMessageFromServer(id);
        if (response) {
          console.log(response);
          setMessageRepositoryChanged(!messageRepositoryChanged);
        }
      })();
    }
  }

  function handleExpandMessage(id: string): void {
    if (id) {
      console.log(id);
      selectedMessagePosition = messages.findIndex((message) => message.id === id);
      setExpandMessage(!expandMessage);
      console.log("expading message with id: " + id + " and position: " + selectedMessagePosition);
    }
  }

  function handleEditMessage(id: string): void {
    if (id) {
      selectedMessagePosition = messages.findIndex((message) => message.id === id);
      setEditMessage(!editMessage);
      console.log("editing message with id: " + id);
    }
  }

  return (
    <div className="my-global">
      <aside className="desktop-aside-primary">
        {expandMessage && (
          <div className="desktop-aside-primary-message">
            <div className="desktop-aside-primary-message-header">
              <p>{messages[selectedMessagePosition].user}</p>
            </div>
            <div className="desktop-aside-primary-message-body">
              <p>{messages[selectedMessagePosition].text}</p>
            </div>
          </div>
        )}
      </aside>
      <aside className="desktop-aside-secondary"></aside>
      <header className="desktop-header-primary"></header>
      <header className="desktop-header-secondary"></header>
      <main className="desktop-main-top">
        <MessageList messages={messages} handleDeleteMessage={handleDeleteMessage} handleExpandMessage={handleExpandMessage} handleEditMessage={handleEditMessage} />
      </main>
      <main className="desktop-main-bottom">
        <label>
          Author:
          <input ref={refUsername} type="text" />
        </label>
        <label>
          Quote:
          <input ref={refMessageText} type="text" />
        </label>
        <button onClick={handleAddMessage}>Send</button>
      </main>
    </div>
  );
};
