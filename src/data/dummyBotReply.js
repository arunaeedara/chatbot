// src/data/dummyBotReply.js
export function getBotReply(userText) {
  const responses = [
    "Interesting! Tell me more.",
    "Hmm… I see.",
    "Can you explain that further?",
    "That's cool!",
    "I’m here to chat anytime!",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
