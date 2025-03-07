import React from 'react';
import Chatbot from './Chatbot.js'; // Make sure the path is correct
import './styles.css'; // If you have styles for the chatbot

function App() {
  return (
    <div className="App">
      <h1>Harokopeio University ISCA Chatbot</h1>
      <Chatbot /> {/* This will render the Chatbot component */}
    </div>
  );
}

export default App;
