import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";

import { HeaderPrimary } from "./components/headerPrimary/HeaderPrimary";
import { HeaderSecondary } from "./components/headerSecondary/HeaderSecondary";
import { AsidePrimary } from "./components/asidePrimary/AsidePrimary";
import { AsideSecondary } from "./components/asideSecondary/AsideSecondary";
import { MainTop } from "./components/mainTop/MainTop";
import { MainBottom } from "./components/mainBottom/MainBottom";
import { MessageType } from "./components/message/Message.model";
import { MessageList } from "./components/messageList/MessageList";

import "./globalCss/globalConstants.css";
import "./globalCss/globalCss.css";
import "./css/desktop-aside-primary.css";
import "./css/desktop-aside-secondary.css";
import "./css/desktop-header-primary.css";
import "./css/desktop-header-secondary.css";
import "./css/desktop-main-bottom.css";
import "./css/desktop-main-top.css";

export const App: React.FC = (): JSX.Element => {
  console.log("App is running");

  const [messages, setMessages] = useState<MessageType[]>([]); //Undra om varje run skall få en egen useState, generea dynamiska??
  const refMessageText = useRef<HTMLInputElement>(null);
  const refUsername = useRef<HTMLInputElement>(null);

  useEffect(() => {}, [messages]);

  function handleAddMessage(): void {
    const messageText = refMessageText.current?.value;
    if (messageText) {
      /*
      messageDto.text = messageText;
      messageDto.sendingUser = refUsername.current?.value || "NoName";
      messageDto.destinationRoom = "room test";
      refMessageText.current.value = "";*/
    }
  }

  return (
    <div className="my-global">
      <aside className="desktop-aside-primary">
        <AsidePrimary />
        <p>desktop-aside-primary.css</p>
      </aside>
      <aside className="desktop-aside-secondary">
        <AsideSecondary />
        <p>desktop-aside-secondary.css</p>
      </aside>
      <header className="desktop-header-primary">
        <HeaderPrimary />
        <p>desktop-header-primary.css</p>
      </header>
      <header className="desktop-header-secondary">
        <HeaderSecondary />
        <p>desktop-header-secondary.css</p>
      </header>
      <main className="desktop-main-top">
        <MainTop />
        <p>desktop-main-top.css</p>
        <MessageList messages={messages} />
      </main>
      <main className="desktop-main-bottom">
        <MainBottom />
        <label>
          Username:
          <input ref={refUsername} type="text" />
        </label>
        <label>
          Text:
          <input ref={refMessageText} type="text" />
        </label>
        <button onClick={handleAddMessage}>Send</button>
      </main>
    </div>
  );
};
