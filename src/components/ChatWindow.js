import { useState } from "react";
import { getBotReply } from "../data/dummyBotReply";
import Message from "./Message";

export default function ChatWindow({ chat, updateMessages }) {
  const [input, setInput] = useState("");

  if (!chat)
    return (
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Chatbot</h2>
      </div>
    );

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    const newMessages = [...chat.messages, userMsg, botMsg];
    updateMessages(chat.id, newMessages);

    setInput("");
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h2>Chatbot</h2>
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          borderBottom: "1px solid #ccc",
        }}
      >
        {chat.messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <input
          style={{ flex: 1 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
