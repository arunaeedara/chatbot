export default function Message({ sender, text }) {
  return (
    <div
      style={{
        margin: "8px 0",
        textAlign: sender === "user" ? "right" : "left",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "10px",
          background: sender === "user" ? "#d1e7ff" : "#f1f1f1",
        }}
      >
        {text}
      </span>
    </div>
  );
}
