export default function ChatList({ chats, activeChatId, onCreate, onSelect }) {
  return (
    <div
      style={{
        width: "250px",
        borderRight: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <button onClick={onCreate}>+ New Chat</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {chats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            style={{
              padding: "10px",
              cursor: "pointer",
              background: activeChatId === chat.id ? "#eee" : "transparent",
            }}
          >
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
