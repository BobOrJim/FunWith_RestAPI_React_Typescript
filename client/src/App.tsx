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

import { getMessagesFromServer, postMessageToServer, deleteMessageFromServer, getMessageByIdFromServer, updateMessageToServer } from "./components/message/Message.api";

let expandedMessage: MessageType = { id: "0", text: "", user: "" };
let editedMessage: MessageType = { id: "0", text: "", user: "" };

export const App: React.FC = (): JSX.Element => {
  console.log("App is running");

  //Fort det blir kladdigt nedan, längtar till redux TK, samt att varje aside/header/main skall bli egna tsx
  const [messages, setMessages] = useState<MessageType[]>([]); //Undra om varje run skall få en egen useState, generea dynamiska??
  const [messageRepositoryChanged, setMessageRepositoryChanged] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<boolean>(false);
  const [expandMessage, setExpandMessage] = useState<boolean>(false);
  const refMessageText = useRef<HTMLInputElement>(null);
  const refUsername = useRef<HTMLInputElement>(null);
  const refEditMessageText = useRef<HTMLInputElement>(null);
  const refEditUsername = useRef<HTMLInputElement>(null);

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
      //console.log(id);
      //Nedan är såklart bästa lösning, men enligt kravspec skall getById endpoint användas, så därav async grejen.
      //selectedMessagePosition = messages.findIndex((message) => message.id === id);
      (async () => {
        const response = await getMessageByIdFromServer(id);
        if (response) {
          console.log(response);
          expandedMessage = response;
          setExpandMessage(!expandMessage);
        }
      })();
    }
  }

  function handleEditMessage(id: string): void {
    if (id) {
      let messageToEdit = messages.find((message) => message.id === id);
      if (messageToEdit) {
        editedMessage = messageToEdit;
        setEditMessage(!editMessage);
        console.log("editing message with id: " + id);
      }
    }
  }

  function handleSubmitEditMessage(): void {
    const messageText = refEditMessageText.current?.value;
    const username = refEditUsername.current?.value;
    if (messageText && username) {
      const newMessage: MessageDto = {
        text: messageText,
        user: username,
      };
      (async () => {
        const response = await updateMessageToServer(editedMessage.id, newMessage);
        if (response) {
          console.log(response);
          console.log();
          setMessageRepositoryChanged(!messageRepositoryChanged);
        }
      })();
      refEditMessageText.current.value = "";
      refEditUsername.current.value = "";
    }
  }

  return (
    <div className="my-global">
      <aside className="desktop-aside-primary">
        <p>Sorry att jag skippa stylingen, jag o hela familjen sjuka i covid. Tror alla G+VG krav är med iaf </p>
        <div
          style={{
            background: "black",
            height: "30px",
          }}
        />
        {true && (
          <div>
            <p>{expandedMessage.user}</p>
            <p>{expandedMessage.text}</p>
          </div>
        )}

        <div
          style={{
            background: "black",
            height: "30px",
          }}
        />

        {editMessage && (
          <div>
            <form>
              <label>
                Edit message:
                <input type="text" ref={refEditMessageText} defaultValue={editedMessage.text} />
              </label>
              <br></br>
              <label>
                Edit username:
                <input type="text" ref={refEditUsername} defaultValue={editedMessage.user} />
              </label>
              <br></br>
              <button type="button" onClick={handleSubmitEditMessage}>
                Submit (put endpoint)
              </button>
            </form>
          </div>
        )}
        <div
          style={{
            background: "black",
            height: "30px",
          }}
        />
        <label>
          Author:
          <input ref={refUsername} type="text" />
        </label>
        <label>
          Quote:
          <input ref={refMessageText} type="text" />
        </label>
        <button onClick={handleAddMessage}>Send (post endpoint)</button>
      </aside>
      <aside className="desktop-aside-secondary"></aside>
      <header className="desktop-header-primary"></header>
      <header className="desktop-header-secondary"></header>
      <main className="desktop-main-top">
        <MessageList messages={messages} handleDeleteMessage={handleDeleteMessage} handleExpandMessage={handleExpandMessage} handleEditMessage={handleEditMessage} />
      </main>
      <main className="desktop-main-bottom"></main>
    </div>
  );
};
