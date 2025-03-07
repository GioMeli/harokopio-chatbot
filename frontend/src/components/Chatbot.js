import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim()) {
      // Display user's message
      setMessages([...messages, { text: userInput, sender: 'user' }]);
      
      // Simulate a chatbot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Bot: I received: ${userInput}`, sender: 'bot' }
      ]);

      // Clear user input
      setUserInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

