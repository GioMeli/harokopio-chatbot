import React, { useState } from 'react';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you with ISCA at Harokopeio University today?' }
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput('');

    // Send user input to the backend
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput }),
    });
    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: data.response }]);
  };

  return (
    <div className="chatbox">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything about ISCA!"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;

