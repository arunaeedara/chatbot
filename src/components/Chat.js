import { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import Test from "./Test";
import Navigation from "./Navigation";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const createNewChat = () => {
    const id = Date.now();
    const newChat = {
      id,
      name: `Chat ${chats.length + 1}`,
      messages: [],
    };
    setChats([...chats, newChat]);
    setActiveChatId(id);
  };

  const updateChatMessages = (chatId, messages) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId ? { ...chat, messages } : chat
      )
    );
  };

  const activeChat = chats.find((c) => c.id === activeChatId);

  return (

  <div style={{ display: "flex", height: "100vh" }}>
        <Navigation activeId={activeChatId} />
      <ChatList
        chats={chats}
        activeChatId={activeChatId}
        onCreate={createNewChat}
        onSelect={setActiveChatId}
      />
      <ChatWindow chat={activeChat} updateMessages={updateChatMessages} />
    </div>
  );
}
